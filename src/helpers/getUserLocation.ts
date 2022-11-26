import React from 'react'

export const getUserLocation = async(): Promise<[number, number]> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => { resolve([coords.longitude, coords.latitude])},
            (err) => { 
                alert('No se puede obtener la gealocalizacion')
                console.log(err)
                reject()
            }
        )
        
    })
}
