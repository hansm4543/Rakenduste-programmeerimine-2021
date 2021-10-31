
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyFooter from './components/MyFooter';
import oldPosts from "./pages/oldPosts";
import Posts from "./pages/Posts";
import HomePage from "./pages/HomePage";
import React from 'react'
import { Layout } from 'antd';
import Register from "./pages/Register";
import AddPost from "./pages/AddPost";
import LogIn from "./pages/LogIn";

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <BrowserRouter>
    <Layout>

    <Header>
      <Route path="/" component={Navbar}/>
    </Header>
      
    <Content>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/oldposts" component={oldPosts}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/addpost" component={AddPost}/>
        <Route exact path="/login" component={LogIn}/>
      </Switch>
      </Content>

    <Footer>
      <Route path="/" component={MyFooter} />
    </Footer>

    </Layout>
    </BrowserRouter>
  );
}

export default App;