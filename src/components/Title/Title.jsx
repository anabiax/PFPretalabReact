import './Title.styles.css'


function Title(props){
    return (
        <div className='title'>
            <h2>{props.info}</h2>
        </div>
    )
}

export default Title