import { PulseLoader } from "react-spinners"

const Loader = ({ loading }) => {
    return (
        <PulseLoader
            color={'#5573AB'}
            loading={loading}
            cssOverride={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}
            size={50}
            speedMultiplier={0.7}
        />
    )
}
export default Loader