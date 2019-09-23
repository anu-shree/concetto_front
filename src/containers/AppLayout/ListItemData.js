import ShopTwoIcon from '@material-ui/icons/ShopTwoOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined';

export const listItemData1 = [
  {
    to: '/account',
    Icon: AccountCircleIcon,
    text: 'My Account',
  },
  {
    to: '/account/wishlist',
    Icon: FavoriteBorderIcon,
    text: 'My wishlist',
  },
  {
    to: '/account/viewcart',
    Icon: ShoppingCartIcon,
    text: 'My Cart',
  },
  {
    to: '/account/orders',
    Icon: ShoppingCartIcon,
    text: 'My Orders',
  },
];

export const listItemData2 = [
  {
    to: '/',
    Icon: HomeIcon,
    text: 'Home',
  },
  {
    to: '/shops',
    Icon: ShopTwoIcon,
    text: 'Shop By Shop',
  },
];
