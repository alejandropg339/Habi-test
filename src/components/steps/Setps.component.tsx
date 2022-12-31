import { DotFillIcon, DotIcon, HorizontalRuleIcon } from '@primer/octicons-react'
import { StepPropsInterface } from '../../interfaces/StepProps.interface'

export const Steps = ({ totalSteps, activeStep }: StepPropsInterface) => {
    return (
        <div className="row">
            <div className="col text-center">
                {[...Array(totalSteps)].map((_, index) =>
                    <div className="inline" key={index}>
                        {activeStep === index ? <DotFillIcon size={20} /> : <DotIcon size={20} />}
                        {totalSteps !== (index + 1) && <HorizontalRuleIcon size={18} />}
                    </div>
                )}
            </div>
        </div>
    )
}
