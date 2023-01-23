import { CardStyle } from "./styles"
import {ReactComponent as DeleteIcon} from './assets/delete.svg'
import {ReactComponent as EditIcon } from './assets/edit.svg'

const Card = ({ span1, span2, text}) => {

    const isEnabled = span1 === "Habilitado"

    return (
    
            <CardStyle isEnabled={isEnabled} >
                <div className="status isEnabled"></div>
                <div className="cardContent">
                <div className="cardHeader">
                    <div className='statusCard isEnabled'>
                        {span1}
                    </div>
                    <div className="statusCard response">
                        {span2}
                    </div>
                    <div className="actions">
                        <DeleteIcon /><EditIcon />
                    </div>
                </div>
                    <div className="cardBody">
                        {text}
                    </div>
                </div>
            </CardStyle>
        
    )
}

export default Card

