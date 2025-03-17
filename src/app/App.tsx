import  { useEffect, useReducer } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

import Loader from '../components/Loader';
import Error from '../components/Error';
import Progress from '../components/Progress';
import Question from '../components/Question';
import Footer from '../components/Footer';
import Timer from '../components/Timer';
import NextButton from '../components/NextButton';
import FinishScreen from '../components/FinishScreen';

const SECS_PER_QUESTION = 30;

// Defina seus tipos aqui
type Question = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

type StatusType = 'finished' | 'ready' | 'loading' | 'error' | 'active';

// Defina todos os tipos de ações possíveis
type Action = 
  | { type: 'dataReceived'; payload: Question[] }
  | { type: 'dataFailed' }
  | { type: 'start' }
  | { type: 'newAnswer'; payload: number }
  | { type: 'nextQuestion' }
  | { type: 'finish' }
  | { type: 'restart' }
  | { type: 'tick' }
  | { type: 'someAction' };

interface State {
  questions: Question[];
  status: StatusType;
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number | null;
}

// Definição do initialState
const initialState: State = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,

  secondsRemaining: null,
};

function operationReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case 'newAnswer': {
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'restart':
      return { ...initialState, questions: state.questions, status: 'ready' };
    // return {
    //   ...state,
    //   points: 0,
    //   highscore: 0,
    //   index: 0,
    //   answer: null,
    //   status: "ready",
    // };

    case 'tick':
      return {
        ...state,
        secondsRemaining:
          state.secondsRemaining !== null ? state.secondsRemaining - 1 : 0,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };
    case 'someAction':
      return {
        ...state,
        status: 'loading', // Agora usando um valor específico permitido
        // outros campos...
      };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(operationReducer, initialState);
  const {
    questions,
    status,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
  } = state;

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0,
  );

  useEffect(function () {
    fetch('http://localhost:9000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch(() => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen 
            numQuestions={numQuestions} 
            dispatch={dispatch as Dispatch<{ type: string }> } 
          />
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === 'finished' && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
};

export default App;

// Em StartScreen.tsx
import { Dispatch } from 'react';
import { Action } from './types'; // Importe o tipo Action que você definiu

type StartScreenProps = {
  numQuestions: number;
  dispatch: Dispatch<Action>; // Use o tipo Action específico
};

function StartScreen({ numQuestions, dispatch }: StartScreenProps) {
  // ...o código do componente
}
