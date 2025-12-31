export const Header = () => {
  return (
    <div className="w-full px-[20px] py-[10px] flex-row flex justify-between items-center border-b-[1px] border-b-[#ddd]">
      <div className="flex">
        <div className="flex p-[2px] items-center rounded-[50%] border-[1px] border-[#2b2b2b]">
          <img
            src="/logo.jpeg"
            className="w-[35px] h-[35px] rounded-[50%] border-[1px] border-[#2b2b2b]"
          />
        </div>
      </div>
      <button className="bg-[#2b2b2b] rounded-[5px] text-[white] px-[7px] py-[5px] text-[13px] h-fit leading-[18px]">
        Connect
      </button>
    </div>
  )
}
