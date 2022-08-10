import {useEffect, useState } from "react"
import Cards from "../../components/Cards"

export default function VehiclesList() {
    return (
        <div>
            <h1>- Vehicles -</h1>
            <Divider/>
            {data.map(profile => {
                return (
                    <Cards
                        titulo={profile.name}
                        descricao={VehiclesList.make}
                    />
                )
            })}

        </div>
    )




}