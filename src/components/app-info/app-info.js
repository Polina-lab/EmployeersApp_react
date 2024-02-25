import "./app-info.css";

const AppInfo = ({countEmp, countIncreased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {countEmp}</h2>
            <h2>Премию получат: {countIncreased}</h2>
        </div>
    )
}

export default AppInfo;