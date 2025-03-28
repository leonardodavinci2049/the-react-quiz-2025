import Error from '../components/Error';
import FinishScreen from '../components/FinishScreen';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Main from '../components/Main';
import NextButton from '../components/NextButton';
import Progress from '../components/Progress';
import Question from '../components/Question';
import StartScreen from '../components/StartScreen';
import Timer from '../components/Timer';
import { QuizProvider } from '../contexts/QuizProvider';
import useQuiz from '../contexts/useQuiz';

export default function App() {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  );
}

function QuizApp() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === 'finished' && <FinishScreen />}
      </Main>
    </div>
  );
}
