import React from "react";

function PostLoadingComponent(Component){
    return function PostLoading({ isLoading, ...props}){
        if (!isLoading) return <Component {...props}/>;
        return (
            <p style={{fontSize:'25px'}}>
                Aguardando os dados...
            </p>
        );
    };
}
export default PostLoadingComponent;