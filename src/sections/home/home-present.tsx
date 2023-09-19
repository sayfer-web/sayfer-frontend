import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { m } from "framer-motion"
import { Link } from "react-router-dom"
import Image from 'src/components/image';
// import { SvgChartOne } from "/assets/animations/present/SvgChartOne.tsx"
// import { SvgChartTwo } from "/assets/animations/present/SvgChartTwo.tsx"
// import { SvgCoinOne } from "/assets/animations/present/SvgCoinOne.tsx"
// import { SvgCoinThree } from "/assets/animations/present/SvgCoinThree.tsx"
// import { SvgCoinTwo } from "/assets/animations/present/SvgCoinTwo.tsx"
// import { SvgFloorOne } from "/assets/animations/present/SvgFloorOne.tsx"
// import { SvgFloorThree } from "/assets/animations/homePage/SvgFloorThree.tsx"
// import { SvgFloorTwo } from "/assets/animations/present/SvgFloorTwo.tsx"
// import { SvgSpotLight } from "/assets/animations/present/SvgSpotLight.tsx"
// import { SvgWebOne } from "/assets/animations/present/SvgWebOne.tsx"
// import { SvgWebThree } from "/assets/animations/present/SvgWebThree.tsx"
// import { SvgWebTwo } from "/assets/animations/present/SvgWebTwo.tsx"
// import { SvgBitcoinLogo } from "src/assets/svg/coins/SvgBitcoinLogo.tsx"
// import { SvgEthereumLogo } from "src/assets/svg/coins/SvgEthereumLogo.tsx"
// import { SvgLitecoinLogo } from "src/assets/svg/coins/SvgLitecoinLogo.tsx"
// import { SvgTetherLogo } from "src/assets/svg/coins/SvgTetherLogo.tsx"
// import { SvgBinanceLogo } from "src/assets/svg/coins/SvgBinanceLogo.tsx"


export const HomePresent = () => {


  const svgList = [
    {
      id: 1,
      title: 'chart1',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 200,
        left: 0,
        zIndex: 1
      },
    },
    {
      id: 2,
      title: 'chart1',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 160,
        left: -20,
        zIndex: 1
      },
    },
    {
      id: 2,
      title: 'chart1',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 120,
        left: 120,
        zIndex: 1
      },
    },
    {
      id: 2,
      title: 'chart2',
      style: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: -20,
        left: 160,
        zIndex: 1
      },
    },
    {
      id: 2,
      title: 'chart2',
      style: {
        width: 200,
        height: 200,
        // position: 'absolute',
        top: -40,
        left: 0,
        zIndex: 1
      },
    },
    {
      id: 2,
      title: 'chart2',
      style: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: -20,
        left: 40,
        zIndex: 1
      },
    },
    {
      id: 2,
      title: 'chart2',
      style: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: -80,
        left: 280,
        zIndex: 1
      },
    },
    {
      id: 3,
      title: 'coin1',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 140,
        left: 380,
        zIndex: 2,
      },
    },
    {
      id: 3,
      title: 'coin1',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 120,
        left: 380,
        zIndex: 2,
      },
    },
    {
      id: 3,
      title: 'coin1',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 100,
        left: 380,
        zIndex: 2,
      },
    },
    {
      id: 3,
      title: 'coin1',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 80,
        left: 380,
        zIndex: 2,
      },
    },
    {
      id: 3,
      title: 'coin1',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 60,
        left: 380,
        zIndex: 2,
      },
    },
    {
      id: 4,
      title: 'coin2',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 0,
        left: 480,
        zIndex: 2
      },
    },
    {
      id: 4,
      title: 'coin2',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: -20,
        left: 480,
        zIndex: 3
      },
    },
    {
      id: 4,
      title: 'coin2',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: -40,
        left: 480,
        zIndex: 4
      },
    },
    {
      id: 4,
      title: 'coin2',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: -60,
        left: 480,
        zIndex: 5
      },
    },
    {
      id: 5,
      title: 'coin3',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: -10,
        left: 375,
        zIndex: 2
      },
    },
    {
      id: 6,
      title: 'floor1',
      style: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 0,
        left: 480,
        zIndex: 1
      },
    },
    {
      id: 7,
      title: 'floor2',
      style: {
        width: 300,
        height: 300,
        position: 'absolute',
        top: 60,
        left: 280,
        zIndex: 1
      },
    },
    {
      id: 8,
      title: 'floor3',
      style: {
        width: 36,
        height: 36,
        position: 'absolute',
        top: -80,
        left: 280,
        zIndex: 1
      },
    },
    {
      id: 9,
      title: 'spotlight',
      style: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: -60,
        left: 328,
        zIndex: 5
      },
    },
    {
      id: 10,
      title: 'web1',
      style: {
        width: 1000,
        height: 1000,
        position: 'absolute',
        top: -300,
        left: -200,
        zIndex: 0
      },
    },
    {
      id: 11,
      title: 'web2',
      style: {
        width: 500,
        height: 500,
        position: 'absolute',
        top: -120,
        left: 60,
        zIndex: 0
      },
    },
    // {
    //   id: 12,
    //   title: 'web3',
    //   style: {
    //     width: 1000,
    //     height: 1000,
    //     position: 'absolute',
    //     top: -200,
    //     left: 280, 
    //     zIndex: 0
    //   },
    // },
  ]

  return (
    <Box sx={{ position: 'relative', zIndex: 2, minWidth: 400, minHeight: 600, top: 0, left: 250 }}>


      {/* CHART 2 */}


      <Box sx={{ position: 'absolute', top: 100, left: 0, zIndex: 10 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div animate={{ y: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity }}>
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={200}
              // style={{ top: 100, left: 0 }}

              src={`/assets/animations/present/chart2.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 130, left: -40, zIndex: 10 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div animate={{ y: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity }}>
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={200}
              // style={{ top: 250, left: -100 }}

              src={`/assets/animations/present/chart2.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 160, left: -80, zIndex: 10 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div animate={{ y: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity }}>
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={200}
              // style={{ top: 250, left: -100 }}

              src={`/assets/animations/present/chart2.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 190, left: -120, zIndex: 10 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div animate={{ y: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity }}>
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={200}
              // style={{ top: 250, left: -100 }}

              src={`/assets/animations/present/chart2.svg`}
            />
          </m.div>
        </m.div>
      </Box>


      {/* CHART 1 */}
      
      <Box sx={{ position: 'absolute', top: 400, left: -160, zIndex: 10 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div animate={{ y: [0, -5, 0] }} transition={{ duration: 16, repeat: Infinity }}>
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ top: 250, left: 240}}
              src={`/assets/animations/present/chart1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 420, left: -120, zIndex: 10 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div animate={{ y: [0, -5, 0] }} transition={{ duration: 16, repeat: Infinity }}>
            <Image  
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ top: 250, left: 240}}
              src={`/assets/animations/present/chart1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 440, left: -80, zIndex: 10 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div animate={{ y: [0, -5, 0] }} transition={{ duration: 16, repeat: Infinity }}>
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ top: 250, left: 240}}
              src={`/assets/animations/present/chart1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      {/* FLOOR */}


      <Box sx={{ position: 'absolute', top: 230, left: -300, zIndex: 5 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div animate={{ y: [0, 0, 0] }} transition={{ duration: 12, repeat: Infinity }}>
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={400}
              // style={{ left: -140 }}
              src={`/assets/animations/present/floor3.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 320, left: -100, zIndex: 5 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div animate={{ y: [0, 0, 0] }} transition={{ duration: 12, repeat: Infinity }}>
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={200}
              // style={{ left: -140 }}
              src={`/assets/animations/present/floor2.svg`}
            />
          </m.div>
        </m.div>
      </Box>


      {/* WEB */}

      <Box sx={{ position: 'absolute', top: 350, left: -200, zIndex: 2 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div animate={{ y: [0, 0, 0] }} transition={{ duration: 12, repeat: Infinity }}>
            <Image
              disabledEffect  
              alt="sidebar"
              // width={100}
              height={200}
              // style={{ left: -140 }}
              src={`/assets/animations/present/web1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 250, left: -250, zIndex: 2 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div animate={{ y: [0, 0, 0] }} transition={{ duration: 12, repeat: Infinity }}>
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={200}
              // style={{ left: -140 }}
              src={`/assets/animations/present/web2.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 150, left: -200, zIndex: 2 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div 
          // animate={{ y: [0, 0, 0] }} 
          // transition={{ duration: 12, repeat: Infinity }}
          >
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={200}
              // style={{ left: -140 }}
              src={`/assets/animations/present/web3.svg`}
            />
          </m.div>
        </m.div>
      </Box>
      

      {/* COIN 3 */}


      <Box sx={{ position: 'absolute', top: 190, left: 0, zIndex: 1 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div 
          // animate={{ y: [0, 0, 0] }} 
          // transition={{ duration: 12, repeat: Infinity }}
          >
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ left: -140 }}
              src={`/assets/animations/present/coin3.svg`}
            />
          </m.div>
        </m.div>
      </Box>


      {/* COIN 3 */}

      <Box sx={{ position: 'absolute', top: 340, left: -10, zIndex: 15 }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div 
          // animate={{ y: [0, 0, 0] }} 
          // transition={{ duration: 16, repeat: Infinity }}
          >
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ top: 120, left: 240 }}
              src={`/assets/animations/present/coin1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 310, left: -10, zIndex: 15  }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div 
          // animate={{ y: [0, 0, 0] }} 
          // transition={{ duration: 8, repeat: Infinity }}
          >
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ top: 60, left: 240}}
              src={`/assets/animations/present/coin1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 280, left: -10, zIndex: 15  }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div 
          // animate={{ y: [0, 0, 0] }} 
          // transition={{ duration: 8, repeat: Infinity }}
          >
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ top: 60, left: 240}}
              src={`/assets/animations/present/coin1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      {/* VERTICAL COIN */}

      <Box sx={{ position: 'absolute', top: 200, left: 0, zIndex: 15  }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div 
          animate={{ y: [0, -50, 0] }} 
          transition={{ duration: 16, repeat: Infinity }}
          >
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={130}
              // style={{ top: 60, left: 240}}
              src={`/assets/animations/present/coin3.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      {/* OTHER COINS */}

      <Box sx={{ position: 'absolute', top: 190, left: 200, zIndex: 10  }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div 
          animate={{ x: [2000, 0, 0] }} 
          transition={{ delay: 2, duration: 4, repeat: 0 }}
          >
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ top: 0, left: 240}}
              src={`/assets/animations/present/coin1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 160, left: 200, zIndex: 10  }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div 
          animate={{ x: [2000, 0, 0] }} 
          transition={{ delay: 4, duration: 4, repeat: 0 }}
          >
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ top: 0, left: 240}}
              src={`/assets/animations/present/coin1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 130, left: 200, zIndex: 10  }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div 
          animate={{ x: [2000, 0, 0] }} 
          transition={{ delay: 6, duration: 4, repeat: 0 }}
          >
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ top: 0, left: 240}}
              src={`/assets/animations/present/coin1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 100, left: 200, zIndex: 10  }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div 
          animate={{ x: [2000, 0, 0] }} 
          transition={{ delay: 8, duration: 4, repeat: 0 }}
          >
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ top: 0, left: 240}}
              src={`/assets/animations/present/coin1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 70, left: 200, zIndex: 10  }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div 
          animate={{ x: [2000, 0, 0] }} 
          transition={{ delay: 10, duration: 4, repeat: 0 }}
          >
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ top: 0, left: 240}}
              src={`/assets/animations/present/coin1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      <Box sx={{ position: 'absolute', top: 40, left: 200, zIndex: 10  }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div 
          animate={{ x: [2000, 0, 0] }} 
          transition={{ delay: 12, duration: 4, repeat: 0 }}
          >
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={100}
              // style={{ top: 0, left: 240}}
              src={`/assets/animations/present/coin1.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      {/* SPOTLIGHT */}

      <Box sx={{ position: 'absolute', top: 0, zIndex: 15  }}>
        <m.div 
        // variants={varFade().inDown}
        >
          <m.div animate={{ y: [0, 0, 0] }} transition={{ duration: 16, repeat: Infinity }}>
            <Image
              disabledEffect
              alt="sidebar"
              // width={100}
              height={250}
              style={{ top: 105, left: -92}}
              src={`/assets/animations/present/spotlight.svg`}
            />
          </m.div>
        </m.div>
      </Box>

      {/* <Stack style={{ position: 'relative', height: 400 }} spacing={2} direction="row" justifyContent="center">
        {svgList.map((platform) => (
        <m.div key={platform} variants={varFade().in}>
          <Box
            component="img"
            src={`/assets/animations/present/${platform.title}.svg`}
            sx={platform.style}
          />
        </m.div>
        ))}
      </Stack> */}

      </Box>

  )
}
