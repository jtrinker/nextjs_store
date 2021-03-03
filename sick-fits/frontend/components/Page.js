import propTypes from 'prop-types';
import Header from './Header';

const Page = ({children}) => {
    return (
        <>
        <Header />
        {children}
        </>
    )
}

Page.propTypes = {
    obj: propTypes.string,
    children: propTypes.any // propTypes.any is appropriate for children since it could be anything
};

export default Page;