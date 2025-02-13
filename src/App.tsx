import { HelmetProvider } from "react-helmet-async";
import { StringCalculatorComponent } from "./components/StringCalculator";
import MetaTags from "./components/seo/MetaTags";

function App() {

  return (
    <HelmetProvider>
      <MetaTags
        title='Incubyte String Calculator'
        description='This is a Incubyte  String Calculator TDD Assessment Kata Developed by Zehan Khan'
        image={`${window.location.href}/favicon.png`}
        name='zehan khan'
      />
      <main role="main" className="main flex min-h-screen flex-col items-center justify-center">
        <StringCalculatorComponent />
      </main>
    </HelmetProvider>

  );
}

export default App;