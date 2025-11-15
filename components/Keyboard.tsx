import { AlphabetKeys, ArrowKeys, BigKey, BigKeyBottom, Caps, CmdKey, CmdKeyRight, ControlKey, DoubleSvg, FnKey, FnKeys, OptionKey, OptionKeyRight, PowerKey, Return, Shift, ShiftRight, Spacebar } from "./ButtonStyles"
import { Branch, F10svg, F11svg, F12svg, F1svg, F2svg, F3svg, F4svg, F5svg, F6svg, F7svg, F8svg, F9svg, Globe, Svg0, Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8, Svg9 } from "./svgs"


export const Keyboard = ({ children } : { children ?: React.ReactNode }) => {
    const fnKeyProp = [{
        name: "F1",
        svg: <F1svg /> 
    },
        {
        name: "F2",
        svg: <F2svg /> 
    },
        {
        name: "F3",
        svg: <F3svg /> 
    },
        {
        name: "F4",
        svg: <F4svg /> 
    },
        {
        name: "F5",
        svg: <F5svg /> 
    },
        {
        name: "F6",
        svg: <F6svg /> 
    },
        {
        name: "F7",
        svg: <F7svg /> 
    },
        {
        name: "F8",
        svg: <F8svg /> 
    },
        {
        name: "F9",
        svg: <F9svg /> 
    },
        {
        name: "F10",
        svg: <F10svg /> 
    },
        {
        name: "F11",
        svg: <F11svg /> 
    },
        {
        name: "F12",
        svg: <F12svg /> 
    }]

    const numKeyProp = [{
        name: "~",
        svg: "`"
    },
    {
        name: "1",
        svg: <Svg1 />
    },
        {
        name: "2",
        svg: <Svg2 />
    },
        {
        name: "3",
        svg: <Svg3 />
    },
        {
        name: "4",
        svg: <Svg4 />
    },
        {
        name: "5",
        svg: <Svg5 />
    },
        {
        name: "6",
        svg: <Svg6 />
    },
        {
        name: "7",
        svg: <Svg7 />
    },
        {
        name: "8",
        svg: <Svg8 />
    },
        {
        name: "9",
        svg: <Svg9 />
    },
        {
        name: "0",
        svg: <Svg0 />
    },
        {
        name: "-",
        svg: "—"
    }, 
        {
        name: "=",
        svg: "+"
    }]

    const line3 = [ "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const lineSvg3 = [{
        name: "[",
        svg: "{"
    }, {
        name: "]",
        svg: "}"
    }, {
        name: "\\",
        svg: "|"
    }]

    const line4 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const lineSvg4 = [{
        name: ";",
        svg: ":"
    }, {
        name: "'",
        svg: `"`
    }]

    const line5 = ["Z", "X", "C", "V", "B", "N", "M"]
    const lineSvg5 = [{
        name: ",",
        svg: "<"
    }, {
        name: ".",
        svg: ">"
    }, {
        name: "/",
        svg: "?"
    }]

    return ( 
        <div className="flex justify-center items-center text-center w-full">
            <div className="bg-zinc-800 max-w-5xl px-2 rounded-2xl">
                <div className="flex flex-col">
                    <div className="flex gap-1.5">
                        <BigKey name="esc" />
                        {fnKeyProp.map(({ name, svg }) => <FnKeys key={name} name={name} svg={svg} /> )}
                        <PowerKey />
                    </div>
                    <div className="flex gap-1.5">
                        {numKeyProp.map(({ name, svg }) => <FnKeys key={name} name={name} svg={svg} /> )}
                        <BigKeyBottom name="delete" />
                    </div>
                    <div className="flex gap-1.5">
                        <BigKey name="tab" />
                        {line3.map((name) => <AlphabetKeys key={name} name={name} />)}
                        {lineSvg3.map(({name, svg}) => <DoubleSvg key={name} name={name} svg={svg} /> )}
                    </div>
                    <div className="flex gap-1.5">
                        <Caps />
                        {line4.map((name) => <AlphabetKeys key={name} name={name} />)}
                        {lineSvg4.map(({name, svg}) => <DoubleSvg key={name} name={name} svg={svg} /> )}
                        <Return />
                    </div>
                    <div className="flex gap-1.5">
                        <Shift />
                        {line5.map((name) => <AlphabetKeys key={name} name={name} />)}
                        {lineSvg5.map(({name, svg}) => <DoubleSvg key={name} name={name} svg={svg} /> )}
                        <ShiftRight />
                    </div>
                    <div className="flex gap-1.5 mb-3">
                        <FnKey />
                        <ControlKey />
                        <OptionKey />
                        <CmdKey />
                        <Spacebar />
                        <CmdKeyRight />
                        <OptionKeyRight />
                        <ArrowKeys />
                    </div>
                </div>
            </div>
            
        </div>
    )
}