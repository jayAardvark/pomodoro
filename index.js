var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Pomodoro = function (_React$Component) {_inherits(Pomodoro, _React$Component);
  function Pomodoro(props) {_classCallCheck(this, Pomodoro);var _this = _possibleConstructorReturn(this, (Pomodoro.__proto__ || Object.getPrototypeOf(Pomodoro)).call(this,
    props));_initialiseProps.call(_this);
    _this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeftMinutes: 25,
      timeLeftSeconds: 0,
      timerStatus: true,
      timerLabel: true };

    var startVar = void 0;
    //this.handleClickStop = this.handleClickStop.bind(this)
    return _this;}_createClass(Pomodoro, [{ key: "render", value: function render()















































































































    {
      return (
        React.createElement("div", { className: "big-grid-container" },
          React.createElement("div", { className: "session-container" },
            React.createElement("h3", { id: "session-label" }, "session length"),
            React.createElement("button", {
                type: "button",
                className: "btn btn-success",
                id: "session-decrement",
                onClick: this.handleClickSessionDec }, "less"),



            React.createElement("h6", { id: "session-length" }, this.state.sessionLength),
            React.createElement("button", {
                type: "button",
                className: "btn btn-success",
                id: "session-increment",
                onClick: this.handleClickSessionInc }, "more")),




          React.createElement("div", { className: "break-container" },
            React.createElement("h3", { id: "break-label" }, "break length"),
            React.createElement("button", {
                type: "button",
                className: "btn btn-success",
                id: "break-decrement",
                onClick: this.handleClickBreakDec }, "less"),



            React.createElement("h6", { id: "break-length" }, this.state.breakLength),
            React.createElement("button", {
                type: "button",
                className: "btn btn-success",
                id: "break-increment",
                onClick: this.handleClickBreakInc }, "more")),




          React.createElement("div", { className: "time-container" },
            React.createElement("h2", { id: "timer-label" },
              this.state.timerLabel == true ? "session" : "break"),


            React.createElement("h1", { id: "time-left" },
              this.state.timeLeftMinutes >= 10 ?
              this.state.timeLeftMinutes :
              "0" + this.state.timeLeftMinutes, ":",
              this.state.timeLeftSeconds >= 10 ?
              this.state.timeLeftSeconds :
              "0" + this.state.timeLeftSeconds)),



          React.createElement("div", { className: "buttons-container" },
            React.createElement("button", {
                type: "button",
                className: "btn btn-success",
                id: "start_stop",
                onClick: this.handleClickStart }, "start/stop"),




            React.createElement("button", {
                type: "button",
                className: "btn btn-success",
                id: "reset",
                onClick: this.handleClickReset }, "reset"),



            React.createElement("audio", {
              id: "beep",
              src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
              ref: "sound" }))));




    } }]);return Pomodoro;}(React.Component);var _initialiseProps = function _initialiseProps() {var _this2 = this;this.handleClickSessionDec = function () {//why is this method purple and the others are yellow?
    if (_this2.state.sessionLength > 1) {_this2.setState({ sessionLength: _this2.state.sessionLength - 1, timeLeftMinutes: _this2.state.sessionLength - 1, timeLeftSeconds: 0 });}};this.handleClickSessionInc = function () {if (_this2.state.sessionLength < 60) {_this2.setState({ sessionLength: _this2.state.sessionLength + 1, timeLeftMinutes: _this2.state.sessionLength + 1, timeLeftSeconds: 0 });}};this.handleClickBreakDec = function () {if (_this2.state.breakLength > 1) {_this2.setState({ breakLength: _this2.state.breakLength - 1 });}};this.handleClickBreakInc = function () {if (_this2.state.breakLength < 60) {_this2.setState({ breakLength: _this2.state.breakLength + 1 });}};this.stopSound = function () {console.log("stop");var audio = _this2.refs["sound"];audio.pause();audio.currentTime = 0;};this.handleClickReset = function () {_this2.stopSound();clearInterval(startVar);_this2.setState({ breakLength: 5, sessionLength: 25, timeLeftMinutes: 25, timeLeftSeconds: 0, timerStatus: true, timerLabel: true });console.log(_this2.state.timerStatus + " reset status");};this.triggerSound = function () {var audio = _this2.refs["sound"];audio.play();console.log("yesh");};this.handleClickStart = function () {_this2.setState({ timerStatus: !_this2.state.timerStatus });console.log(_this2.state.timerStatus + " play status");var minutes = _this2.state.timeLeftMinutes;var seconds = _this2.state.timeLeftSeconds; /*minutes = 0;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      seconds = 2;*/if (_this2.state.timerStatus == true) {startVar = setInterval(function () {if (seconds == 0 && minutes != 0) {minutes--;seconds = 59; //change back to 59
        } else if (seconds == 0 && minutes == 0) {console.log("first"); //clearInterval(startVar);
          _this2.triggerSound(); //insert sound somewhere here
          _this2.setState({ timerLabel: !_this2.state.timerLabel });if (_this2.state.timerLabel == true) {minutes = _this2.state.sessionLength;seconds = 0;} else {minutes = _this2.state.breakLength;seconds = 0;}} else {seconds--;}_this2.setState({ timeLeftMinutes: minutes, timeLeftSeconds: seconds });console.log("start/stop");}, 1000);} else {clearInterval(startVar);console.log(_this2.state.timerStatus + " pause status");}};};ReactDOM.render(React.createElement(Pomodoro, null), document.getElementById("target-node"));