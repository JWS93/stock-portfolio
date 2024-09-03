var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_React$Component) {
  _inherits(Portfolio, _React$Component);

  function Portfolio(props) {
    _classCallCheck(this, Portfolio);

    var _this = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));

    _this.state = {
      portfolio: [{
        name: 'Feetbook',
        shares_owned: 20,
        cost_per_share: 50,
        market_price: 130
      }, {
        name: 'Yamazon',
        shares_owned: 5,
        cost_per_share: 200,
        market_price: 500
      }, {
        name: 'Snoozechat',
        shares_owned: 100,
        cost_per_share: 20,
        market_price: 3
      }]
    };

    _this.removeStock = _this.removeStock.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Portfolio, [{
    key: 'handleChange',
    value: function handleChange(event, index) {
      var portfolio = this.state.portfolio.slice();
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;


      portfolio[index][name] = value;
      this.setState({ portfolio: portfolio });
    }
  }, {
    key: 'removeStock',
    value: function removeStock(index) {
      var portfolio = this.state.portfolio.slice();
      portfolio.splice(index, 1);

      this.setState({ portfolio: portfolio });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var portfolio = this.state.portfolio;


      var portfolio_market_value = portfolio.reduce(function (sum, stock) {
        return stock.shares_owned * stock.market_price + sum;
      }, 0);
      var portfolio_cost = portfolio.reduce(function (sum, stock) {
        return stock.shares_owned * stock.cost_per_share + sum;
      }, 0);
      var portfolio_gain_loss = portfolio_market_value - portfolio_cost;

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'h1',
          { className: 'text-center my-4' },
          'Stock Portfolio'
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-12' },
            React.createElement(
              'table',
              { className: 'table table-responsive' },
              React.createElement(
                'thead',
                null,
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Name'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Shares Owned'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Cost per Share ($)'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Market Price ($)'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Market Value ($)'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Unrealized Gain/Loss'
                  ),
                  React.createElement('th', { scope: 'col' })
                )
              ),
              React.createElement(
                'tbody',
                null,
                portfolio.map(function (stock, index) {
                  var name = stock.name,
                      shares_owned = stock.shares_owned,
                      cost_per_share = stock.cost_per_share,
                      market_price = stock.market_price;


                  var market_value = shares_owned * market_price;
                  var unrealized_gain_loss = market_value - shares - owned * cost_per_share;

                  return React.createElement(
                    'tr',
                    { key: index },
                    React.createElement(
                      'td',
                      null,
                      name
                    ),
                    React.createElement(
                      'td',
                      null,
                      React.createElement('input', { onChange: function onChange(e) {
                          return _this2.handleChange(e, index);
                        }, type: 'number', name: 'shares_owned', value: shares_owned })
                    ),
                    React.createElement(
                      'td',
                      null,
                      React.createElement('input', { onChange: function onChange(e) {
                          return _this2.handleChange(e, index);
                        }, type: 'number', name: 'cost_per_share', value: cost_per_share })
                    ),
                    React.createElement(
                      'td',
                      null,
                      React.createElement('input', { onChange: function onChange(e) {
                          return _this2.handleChange(e, index);
                        }, type: 'number', name: 'market_price', value: market_price })
                    ),
                    React.createElement(
                      'td',
                      null,
                      market_value
                    ),
                    React.createElement(
                      'td',
                      null,
                      unrealized_gain_loss
                    ),
                    React.createElement(
                      'td',
                      null,
                      React.createElement(
                        'button',
                        { className: 'btn btn-light btn-sm', onClick: function onClick() {
                            return _this2.removeStock(index);
                          } },
                        'remove'
                      )
                    )
                  );
                })
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-12 col-md-6' },
            React.createElement(
              'h4',
              { className: 'mb-3' },
              'Portfolio value: $ ',
              portfolio_market_value
            )
          ),
          React.createElement(
            'div',
            { className: 'col-12 col-md-6' },
            React.createElement(
              'h4',
              { className: 'mb-3' },
              'Portfolio Gain/Loss: $ ',
              portfolio_gain_loss
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