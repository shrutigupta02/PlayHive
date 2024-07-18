import image from '../assets/Background.png';

export default function Background({title}){
    return(
        <div className='background'>
            <img src={image} />
            <h1>{title}</h1>
        </div>
    )
}