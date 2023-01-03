import React from "react"
import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { postRecipe, getDiets } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const CreateRecipe = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)



    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])

    const [infoSteps, setInfoSteps] = useState("")
    const [errors, setErrors] = useState("")
    const [input, setInput] = useState({
        name: "",
        summary: "",
        healthscore: "",
        diets: [],
        steps: [],
        image: ""
    })

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }


    function validate(input) {
        let errors = {};
        if (!input.name) {
            errors.name = "El campo nombre es requerido";
        } if (!input.summary) {
            errors.summary = "El campo resumen es requerido";
        } if (input.healthscore > 100 || input.healthscore < 0) {
            errors.healthscore = "El healt score debe ser entre 0 y 100";
        }

        return errors;
    }

    function handleCheckbox(e) {
        if (e.target.checked) {
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        } else {
            setInput({
                ...input,
                diets: input.diets.map(el => el !== e.target.value)
            })

        }
    }


    function handleAddSteps(e) {
        e.preventDefault();
        setInput({
            ...input,
            steps: [...input.steps, infoSteps]
        })

        setInfoSteps("")
    }

    function handleDeleteLast(e) {
        e.preventDefault();
        input.steps.pop();
        setInput({
            ...input,
        })
        setInfoSteps("")
    }


    function handleDeleteAll(e) {
        e.preventDefault();
        setInput({
            ...input,
            steps: []
        })
        setInfoSteps("")
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (input.name === "") {
            return alert("Por favor ingrese un nombre para su receta")
        }
        if (input.summary === "") {
            return alert("Por favor ingrese un resumen de su receta")
        }
        if (input.image === "") {
            setInput({
                ...input,
                image: "https://cdn.pixabay.com/photo/2018/03/05/06/26/board-3200054_960_720.jpg"
            })
        }
        if (input.healthscore > 100 || input.healthscore < 0) {
            return alert("Por favor ingrese un valor entre 0 y 100 para calificar su health score")
        }

        dispatch(postRecipe(input))
        alert("La receta fue creada exitosamente")
        setInput({
            name: '',
            summary: '',
            image: '',
            healthscore: '',
            steps: [],
            diets: [],
        })
        history.push('/home')
    }


    return (
        <div>
            <Link to="/home"><button>Regresar a Home</button></Link>
            <h1>Crea tu propia receta📝</h1>


            <form onSubmit={e => { handleSubmit(e) }}>
                <section>
                    <div>
                        <label>Nombre: </label>
                        <input
                            type="text"
                            value={input.name}
                            name="name"
                            autoComplete="off"
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                    {errors.name && (<p>{errors.name}</p>)}
                    <div>
                        <label>Resumen: </label>
                        <textarea
                            value={input.summary}
                            name="summary"
                            rows="5" cols="40"
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                    {errors.summary && (<p>{errors.summary}</p>)}
                    <div>
                        <label>Health Score: </label>
                        <input
                            type="number"
                            value={input.healthscore}
                            name="healthscore"
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                    {errors.healthscore && (<p>{errors.healthscore}</p>)}

                    <div>
                        <fieldset>
                            <legend>Elija uno o más tipos de dietas</legend>
                            {diets.map(diet => {
                                return (
                                    <div>
                                        <p>
                                            {diet.name}
                                        </p>
                                        <input type="checkbox" name={diet.name} value={diet.name} onChange={e => handleCheckbox(e)} />
                                    </div>
                                )
                            })}
                        </fieldset>
                    </div>
                </section>

                <section>
                    <div>
                        <legend>Pasos de preparacion: </legend>
                        <textarea value={infoSteps} name="name" onChange={e => setInfoSteps(e.target.value)} row="10" col="60" />
                        <div>
                            <input type="submit" name="agregar" value="Agregar paso" onClick={e => handleAddSteps(e)} />
                            <input type="submit" name="borrar" value="Borrar último" onClick={e => handleDeleteLast(e)} />
                            <input type="submit" name="borrartodo" value="Borrar Todo" onClick={e => handleDeleteAll(e)} />
                        </div>
                    </div>

                    <div>
                        <ol>
                            {input.steps.map(step => {
                                return (<>
                                    <li>{step}</li>
                                </>
                                )
                            })}
                        </ol>
                    </div>
                </section>

                <div>
                    <button type="submit">CREAR RECETA</button>
                </div>

            </form>


        </div>
    )
}

export default CreateRecipe