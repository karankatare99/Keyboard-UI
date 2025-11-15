import React from "react"
import { BottomArrow, Branch, BranchRight, CommandSvg, CommandSvgRight, Globe, LeftArrow, RightArrow, TopArrow, UpArrow } from "./svgs"

export const FnKeys = ({ name, svg } : { name: string, svg: React.ReactNode }) => (
    <div className="relative mt-2 flex flex-col justify-center size-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="flex flex-col text-white items-center cursor-pointer">
            {svg}
            <div className="text-sm mt-2 group-hover:text-[13px] transition-all duration-200">{name}</div>
        </div>
    </div>
)

export const AlphabetKeys = ({ name } : { name : string }) => (
    <div className="relative mt-2 flex flex-col justify-center size-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="text-sm group-hover:text-[13px] text-white transition-all duration-200"> {name} </div>
    </div>
)

export const DoubleSvg = ({ name, svg } : { name: string, svg: React.ReactNode }) => (
    <div className="relative mt-2 flex flex-col justify-center size-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="flex flex-col text-white items-center cursor-pointer">
            <div className="group-hover:text-[13px]">
                {svg}
            </div>
            <div className="text-xs mt-1 group-hover:text-[13px] transition-all duration-200">{name}</div>
        </div>
    </div>
)

export const Return = () => (
    <div className="relative mt-2 w-30 h-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="absolute mt-9 ml-18 text-sm group-hover:text-[13px] text-white transition-all duration-200"> return </div>
    </div>
)

export const PowerKey = () => (
    <div className="relative mt-2 flex flex-col items-center justify-center size-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="">
            <div className="size-10 rounded-full border-2 border-neutral-900 bg-linear-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95%"></div>
        </div>
    </div>
)

export const BigKey = ({ name } : { name : string }) => (
    <div className="relative mt-2 w-24 h-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="absolute mt-8 ml-3 text-sm text-left group-hover:text-[13px] text-white transition-all duration-200"> {name} </div>
    </div>
)

export const BigKeyBottom = ({ name } : { name : string }) => (
    <div className="relative mt-2 w-24 h-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="absolute mt-9 ml-12 text-sm group-hover:text-[13px] text-white transition-all duration-200"> {name} </div>
    </div>
)

export const Caps = () => (
    <div className="relative mt-2 w-28 h-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="absolute mt-8 ml-3 text-sm text-left group-hover:text-[13px] text-white transition-all duration-200"> caps lock </div>
    </div>
)

export const Shift = () => (
    <div className="relative mt-2 w-38 h-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="absolute mt-8 ml-3 text-sm text-left group-hover:text-[13px] text-white transition-all duration-200"> shift </div>
    </div>
)

export const ShiftRight = () => (
    <div className="relative mt-2 w-38 h-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="absolute mt-8 ml-28 text-sm text-left group-hover:text-[13px] text-white transition-all duration-200"> shift </div>
    </div>
)

const ArrowKeyStyle = ({ svg } : { svg : React.ReactNode }) => (
    <div className="relative mt-1 flex flex-col justify-center w-16 h-8 size-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-lg group">
        <div className="flex justify-center text-sm group-hover:text-[13px] text-white transition-all duration-200"> {svg} </div>
    </div>
)

export const ArrowKeys = () => (
  <div className="flex flex-col items-center">
    <ArrowKeyStyle svg={<TopArrow />} />
    <div className="flex flex-row gap-1">
      <ArrowKeyStyle svg={<LeftArrow />} />
      <ArrowKeyStyle svg={<BottomArrow />} />
      <ArrowKeyStyle svg={<RightArrow />} />
    </div>
  </div>
)

export const FnKey = () => (
    <div className="relative mt-2 flex flex-col justify-center size-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="flex flex-col gap-2.5 text-white items-center cursor-pointer">
            <div className="text-sm ml-8 group-hover:text-[13px] transition-all duration-200">fn</div>
            <Globe />
        </div>
    </div>
)

export const ControlKey = () => (
    <div className="relative mt-2 flex flex-col justify-center size-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="flex flex-col gap-2 text-white items-center cursor-pointer">
            <UpArrow />
            <div className="text-sm group-hover:text-[13px] transition-all duration-200">control</div>
        </div>
    </div>
)

export const OptionKey = () => (
    <div className="relative mt-2 flex flex-col justify-center size-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="flex flex-col gap-2 text-white items-center cursor-pointer">
            <Branch />
            <div className="text-sm group-hover:text-[13px] transition-all duration-200">option</div>
        </div>
    </div>
)

export const OptionKeyRight = () => (
    <div className="relative mt-2 flex flex-col justify-center size-16 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="flex flex-col gap-2 text-white items-center cursor-pointer">
            <BranchRight />
            <div className="text-sm group-hover:text-[13px] transition-all duration-200">option</div>
        </div>
    </div>
)

export const CmdKey = () => (
    <div className="relative mt-2 flex flex-col justify-center h-16 w-20 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="flex flex-col gap-2 text-white items-center cursor-pointer">
            <CommandSvg />
            <div className="text-sm group-hover:text-[13px] transition-all duration-200">command</div>
        </div>
    </div>
)

export const CmdKeyRight = () => (
    <div className="relative mt-2 flex flex-col justify-center h-16 w-20 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
        <div className="flex flex-col gap-2 text-white items-center cursor-pointer">
            <CommandSvgRight />
            <div className="text-sm group-hover:text-[13px] transition-all duration-200">command</div>
        </div>
    </div>
)

export const Spacebar = () => (
    <div className="relative mt-2 flex flex-col justify-center h-16 w-87 bg-zinc-950 shadow-lg shadow-neutral-300/90 border-t-3 hover:border-l-3 hover:shadow-none border-zinc-700 transition-transform duration-100 rounded-xl group">
    </div>
)