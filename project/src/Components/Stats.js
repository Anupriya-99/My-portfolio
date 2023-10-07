import NumberCounter from "number-counter";
import PieChart from "./PieChart";

const Stats = () => {
  return (
    <div className="m-4">
      <h1 className="text-center text-3xl font-bold m-2">
        eWaste Recycled By Us
      </h1>
      <div className="flex flex-col md:flex-row gap-20 justify-center">
        {/* apexchart */}
        <PieChart />
        <div>
          <div className="flex gap-10">
            <div>
              <div>
                <img
                  className="w-[8rem] h-[6rem]"
                  src="data:image/png;base64,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"
                />{" "}
              </div>
              <div>
                <div className="text-center font-bold text-lg">Laptop</div>
                <NumberCounter
                  end={100}
                  delay={0.5}
                  className="increment text-center text-xl font-bold text-orange-500"
                  postFix="& more"
                />
                <div className="text-center">Recycled</div>
              </div>
            </div>
            <div className="h-full w-1"></div>
            <div>
              <div>
                <img
                  className="w-[8rem] h-[6rem]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAdVBMVEX///8AAACYmJikpKSrq6u4uLivr6+VlZWfn59RUVH29vb8/PwFBQU0NDReXl60tLTQ0NANDQ3o6OjCwsJYWFgSEhLy8vKMjIyCgoLGxsZwcHBWVlbU1NTg4OAcHBwhISEtLS1HR0d6enqFhYUnJycdHR1qamo4A1r8AAAELElEQVR4nO3d63aaQBiF4UGOMuAJFUXNQdPc/yX2Q0wXsNPaNY5Vpvv50RgTZ4XXASdoo1JERET039Dmt9Tmt31yplvmaBE3t+pWi1kRGpoW+8Wjf3zbUq2KURD5fmLIj/xkq906rBzKcDR+8Yxlr8skjBdKp4/eEmuKOPgwD3KRR+XelSZahfFR7urO/f5Xk6P/2amcOXKw1vvluN6ocbKdXRyvdsiy+lL+dYttch5iuXTjUKv1Lq+3p2hdd2i2Ojt/uFxuyOX5+Z95/WHTuk143n8qmScOzJRgsvK81aFZeOmaWrycNzv7mhCrL3J5vprX187rL0Tq102U2s/lUDvZOtGkmsimR60rZAsrr9noyzzp7D2XeSJ9Vuv2rVQgX602/eGH6HB687yP9jVyT6/zK4fXTCaLF/aG+uF578fUgWkSRXLg7N67slXrzdWHnfG2s0KTh+FK9iy/cGDfSUbSxG9fo5vjZPpHuGLVqh5pGvy7H/1uRrHc5/717/uboeoDk52hHiuO+/PEWN0kcGGexHbniTQZ/vEkHtndd5yYJ2wC2ASxCbL9WOxEE1izmQ/lShPuO0B/skmXVumETbrYBLEJaprwcadNqzXnSY/8ClslbNLHdSzimg2xCWKTPs0mfbI+2XF90sX1yXesr2Oj69/33O7w+0489Ocy7DcJ39bXv/Gp3aPJ0F/SZr/JNGeTNjZBbILcaKJkzWb3/IkLTbQ0sblmc6CJrs8psUmH9d+LHWiiVGn33KMLTVIeT4DtcwXDb8L1CWITxCboHk14/qSN50/QeZ4ch/7/ae9wPjYa+vnYZn3C53e6+PxOX/36E77Wokfz9Sff4HPoiE0QmyA2QWyC2ASxCWITxCaITRCbIDZBbILYBLEJYhPEJohNEJsgNkFsgtgEsQliE8QmiE0QmyA2QWyC2ASxCWITxCaITRCbIDZBbILYBLEJYhPEJohNEJsgNkFsgtgEsQliE8QmiE0QmyA2QWyC2ASxCWITxCaITRCbIDZBbILYBLEJYhPEJohNEJsgNkFsgtgEsQliE8QmiE0QmyA2QWyC2ASxCWITxCaITRCbIDZBbILYBMV2/5Z7EAz/vSHqJjbfGyJwYZ7Y/pv/doZ6rKR+D5HR7eNorUoZaerCPIkiuXfHt48jTd49b+4XDhxPDqc3iXKwMZKM835Mh59E6WoiU35iYaClNKk2tw/0BILPlWzMUd36nlOV7Dmvk612YN/RepdLEy/fmr85mdZpkXtZ5uWVcqPJbCkHx8zzXsbGdnJzSbLbLR69OXZoFcbVeZNudSpnyoFZ0iji4OPmInlU7vXQ3xyw5VCGo/GLeY/sdZmE8UI51ETWFMUoiHw/MeRHflI/4gz9/RL7FrMiNDQt9o4cXDscu4PtMZ36ru0yLeZb5tyBhIiIiH7vJxfeO0QF+Kn9AAAAAElFTkSuQmCC"
                />
              </div>
              <div>
                <div className="text-center font-bold text-lg">Mobile</div>
                <NumberCounter
                  end={100}
                  delay={0.5}
                  className="increment text-center text-xl font-bold text-orange-500"
                  postFix="& more"
                />
                <div className="text-center">Recycled</div>
              </div>
            </div>
          </div>
          <div className="flex p-2 gap-10">
            <div>
              <div>
                <img
                  className="w-[8rem] h-[6rem]"
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhome-appliance&psig=AOvVaw09cg1Jina5iN88oI2i43C8&ust=1695962556481000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCpzoC_zIEDFQAAAAAdAAAAABAJ"/>
              </div>
              <div>
                <div className="text-center font-bold text-lg">Home appliance</div>
                <NumberCounter
                  end={100}
                  delay={0.5}
                  className="increment text-center text-xl font-bold text-orange-500"
                  postFix="& more"
                />
                <div className="text-center">Recycled</div>
              </div>
            </div>
            <div className="h-full w-1"></div>
            <div>
              <div>
                <img
                  className="w-[8rem]  h-[6rem]"
                  src="https://beardedbutchers.com/cdn/shop/articles/Smoking_Times_and_Temperatures.jpg?v=1634590750"
                />{" "}
              </div>
              <div>
                <div className="text-center font-bold text-lg">Others</div>
                <NumberCounter
                  end={100}
                  delay={0.5}
                  className="increment text-center text-xl font-bold text-orange-500"
                  postFix="& more"
                />
                <div className="text-center">Recycled</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
