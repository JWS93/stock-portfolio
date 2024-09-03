var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_React$Component) {
  _inherits(Portfolio, _React$Component);

  function Portfolio(props) {
    _classCallCheck(this, Portfolio);

    return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));
  }

  _createClass(Portfolio, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h1",
          { className: "text-center my-4" },
          "Stock Portfolio"
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-12" },
            React.createElement(
              "table",
              { className: "table table-responsive" },
              React.createElement(
                "thead",
                null,
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "th",
                    { scope: "col" },
                    "Name"
                  ),
                  React.createElement(
                    "th",
                    { scope: "col" },
                    "Shares Owned"
                  ),
                  React.createElement(
                    "th",
                    { scope: "col" },
                    "Cost per Share ($)"
                  ),
                  React.createElement(
                    "th",
                    { scope: "col" },
                    "Market Price ($)"
                  ),
                  React.createElement(
                    "th",
                    { scope: "col" },
                    "Market Value ($)"
                  ),
                  React.createElement(
                    "th",
                    { scope: "col" },
                    "Unrealized Gain/Loss"
                  ),
                  React.createElement("th", { scope: "col" })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Portfolio;
}(React.Component);

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(Portfolio, null));