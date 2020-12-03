import React, { useState } from "react";


 /************componente render contattiCard ***************/

const ContattiCard =props => {
        const [data,setData]=useState(props.value)
    /* props supplementari dei contatti*/
        const logo=props.logo
        const info=props.info
        //////////////////////
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="card" style={{
                        width: '100vw',
                    }}>
                        <div className="card-body">
                            <div className="col">
                                <div className="row mt-3">
                                    <div className="col-3">
                                        {Object.entries(data).map(val=>{
                                        // name: Carlo [name,Carlo]
                                        //image : http-- [image., http]
                                        //{console.log("entries",val)}
                                            return(
                                                (val[1].substring(0,4)=="http") ?
                                                        <img id="imageCard" key={val[0]} src={val[1]} className="card-img-top"/>
                                                        : " "
                                            )
                                        })}
                                    </div>
                                    <div className="col-6">
                                        {Object.entries(data).map(val=>{
                                            return(
                                                (val[1].substring(0,4)!="http") ?
                                                            <p id={val[0]} key={val[0]}>{val[1]}</p>
                                                        : " "
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <img id="logoContact"src={logo.image}/>
                                <div className="p-contact">
                                    {info.map((val,index)=>{
                                        return(
                                            <p key={index}>{val}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default ContattiCard
