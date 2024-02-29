import { useState } from 'react';
import Header from '../components/Header'
import Media from 'react-media';

const SidebarLayout = ({
    left: Side, 
    right: Main,
}) => {
    const [mobileSideOpen, setMobileSideOpen] = useState(false);

    return (
        <>
        <div className='sidebarlayout__header'>
            <Header toggleSidebar={() => setMobileSideOpen(!mobileSideOpen)}/>
        </div>
        <div className='sidebarlayout__container'>
            <Media query='(min-width: 70em)' render={() =>  
                (
                    <div className='sidebarlayout__side'>
                        <Side />
                    </div>
                )} 
            />
            <div className='sidebarlayout__main'>
                <Main />
            </div>
        </div>
        {mobileSideOpen && <div className="sidebarlayout__mobilesidebar">
            <Side />
        </div>}
        </>
    )
}

export default SidebarLayout