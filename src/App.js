import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
// import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import { actionTypes } from "./Store/Reducer";
import { useStateValue } from "./Store/StateProvider";
import ChatGpt from "./Student/ChatGpt";
import HelpSomeone from "./Student/HelpSomeone";
import Notes from "./Student/Notes";
import Profile from "./Student/Profile";
import ProfileLayout from "./Student/ProfileLayout";
import Skills from "./Student/Skills";
import Study from "./Student/Study";
import Test from "./Student/Test";
import Contents from "./Teacher/Contents";
import StudentsDoubts from "./Teacher/StudentsDoubts";
import TopicDetails from "./Teacher/TopicDetails";
import ViewTopics from "./Teacher/ViewTopics";


function App() {

  const [state, dispatch] = useStateValue();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      dispatch({
        type: actionTypes.log_in,
        login: true,
        authToken : localStorage.getItem("authToken"),
        userType : localStorage.getItem("userType"),
      });
    }
  }, []);


  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/student-profile" element={<ProfileLayout/>} >
          <Route index element={<Profile/>} />
          <Route path="study" element={<Study/>} />
          <Route path="notes" element={<Notes/>} />
          <Route path="test" element={<Test/>} />
          <Route path="skills" element={<Skills/>} />
          <Route path="help-someone" element={<HelpSomeone/>} />
          <Route path="chat-gpt" element={<ChatGpt/>} />
        </Route>
        <Route path="/teacher-profile" element={<ProfileLayout/>} >
          <Route index element={<Profile/>} />
          <Route path="contents" element={<Contents/>} />
          <Route path="contents/view-topics" element={<ViewTopics/>} />
          <Route path="contents/view-topics/:id" element={<TopicDetails/>} />
          <Route path="student-doubts" element={<StudentsDoubts/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
