import Nav from "./Nav";
import S1 from "./S1";
import Form from "./Form";
import Footer from "./Footer";
function App() {
    return (
        <div className="min-h-screen bg-gray-200">
            <Nav/>
            <hr className="w-full h-0.5 border-amber-50 text-white"/>
            <S1/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default App;