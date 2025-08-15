import './Banner.css';

export function Banner() {
    const bannerText = "GUESS-THE-KANA-";
    const count = 8;
    return (<div className='banner'>
        <div className='banner__roll'>
            <div className='banner__text'>{bannerText.repeat(count).split('').map(
                (letter, index) => <span className='banner__letter' style={{'--number': `${index % bannerText.length}`}}>{letter}</span> 
            )}</div>
        </div>
        <div className='banner__patch'>
            <div className='banner__eye'/>
            <div className='banner__eye'/>
        </div>
    </div>);
}