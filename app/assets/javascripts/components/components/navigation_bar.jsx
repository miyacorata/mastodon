import PureRenderMixin    from 'react-addons-pure-render-mixin';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Avatar             from './avatar';
import IconButton         from './icon_button';
import DisplayName        from './display_name';
import { Link }           from 'react-router';

const NavigationBar = React.createClass({
  propTypes: {
    account: ImmutablePropTypes.map.isRequired
  },

  mixins: [PureRenderMixin],

  render () {
    return (
      <div style={{ padding: '10px', display: 'flex', cursor: 'default' }}>
        <Link to={`/accounts/${this.props.account.get('id')}`} style={{ textDecoration: 'none' }}><Avatar src={this.props.account.get('avatar')} size={40} /></Link>

        <div style={{ flex: '1 1 auto', marginLeft: '8px' }}>
          <strong style={{ fontWeight: '500', display: 'block' }}>{this.props.account.get('acct')}</strong>
          <Link to='/settings' style={{ color: '#9baec8', textDecoration: 'none' }}>Settings <i className='fa fa fa-cog' /></Link>
        </div>
      </div>
    );
  }

});

export default NavigationBar;
