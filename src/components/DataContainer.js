import '../styles/DataContainer.css';
import { CheckSharp, ErrorOutlineSharp } from '@mui/icons-material';

function DataContainer(props) {
    return (
        <div className="DataContainer">
            
            {

                props.data.map((everyData, index) => (
                    <div key={index}>
                        {
                            everyData.completed ?
                                <CheckSharp color="success" />
                            :
                                <ErrorOutlineSharp color="error" />
                        }

                        <p className="todoText">{everyData.title}</p>
                    </div>
                ))

            }

        </div>
    )
}

export default DataContainer;
