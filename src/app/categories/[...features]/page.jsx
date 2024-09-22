const page = ({params}) => {
    if(params.features.length == 2)
        return <div>{params.features[1]}</div>
    return (
        <div>
            Features Page
        </div>
    );
};

export default page;