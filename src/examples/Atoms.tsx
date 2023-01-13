import {atom, useRecoilState, useRecoilValue} from 'recoil'

const darkModeState = atom({
    key: 'darkMode',
    default: false,
})

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)

    console.log({darkMode})

    return <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.currentTarget.checked)} />
}

const Button = () => {
    const darkMode = useRecoilValue(darkModeState)
    return (
        <button style={{backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black'}}>
            My UI Button
        </button>
    )
}

export const Atoms = () => {
    return (
        <div>
            <div>
                <DarkModeSwitch />
            </div>
            <div>
                <Button />
            </div>
        </div>
    )
}
