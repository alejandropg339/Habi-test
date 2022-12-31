import { CheckCircleFillIcon, CheckCircleIcon } from "@primer/octicons-react"
import { CardProps } from "../../interfaces/CardProps.interface"

export const Card: React.FC<CardProps> = ({ title, description, completed = false, children, active = false }) => {
    return (
        <>
            <div className="row">
                <div className="col px-3">
                    <div className="card mb-2">
                        <div className="card-title">
                            <h4>{title}</h4>
                            {!completed ? <CheckCircleIcon size={24} /> : <CheckCircleFillIcon size={24} />}
                        </div>
                        {active &&
                            <div className="card-content">
                                <hr />
                                <p>{description}</p>
                                {children}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}