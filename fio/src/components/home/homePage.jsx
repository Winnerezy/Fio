import Dashboard from "./dashboard";
import Title from "./title";

export default function Homepage(){

    return(
        <div className="flex flex-col items-center justify-center gap-y-8">
            <Title/>
            <Dashboard/>
        </div>
    )
}