/*  the following css was with this code

.background-enter {
  transform: translate(100%);
}
.background-enter.background-enter-active {
  transform: translate(0%);
  transition: transform 1000ms ease-in-out;
}
.background-leave {
  transform: translate(0%);
}
.background-leave.background-leave-active {
  transform: translate(-100%);
  transition: transform 1000ms ease-in-out;
}


*/





class BackgroundImage extends React.Component {
  render() {
    const urls = {
      home: 'http://i.imgur.com/kJXRAZH.jpg',
      about: 'http://i.imgur.com/TaA1gj9.png'
    };
    const style = {
      position: 'fixed',
      top: 0,
      zIndex: -1000,
      backgroundColor: '#FFFEF4',
      width: '100%'
    };
   let src = urls[this.props.page];
  
   return <img src={src} style={style} />;
  }
}
export default BackgroundImage;