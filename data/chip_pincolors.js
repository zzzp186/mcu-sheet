<<<<<<< HEAD
const categoryConfig = {
    activeScheme: 'dark',
    schemes: {
        dark: '深色主题',
        vivid: '鲜艳主题',
        pastel: '柔和主题',
    },
    categories: {
        gpio: {
            name: 'GPIO',
            shortName: 'GPIO',
            colors: {
                dark:   { base: '#4da868', light: '#6fd488', bg: 'rgba(77,168,104,0.3)', bgTag: 'rgba(77,168,104,0.2)', colorTag: '#5cb878', gradH: 'linear-gradient(180deg, #6ba878 0%, #3d7a50 70%, #2d5a38 100%)', gradV: 'linear-gradient(90deg, #3d7a50 0%, #6ba878 70%, #3d7a50 100%)', gradVR: 'linear-gradient(90deg, #3d7a50 0%, #6ba878 30%, #3d7a50 100%)', glow: '0 0 4px rgba(77,168,104,0.4)' },
                vivid:  { base: '#22c55e', light: '#4ade80', bg: 'rgba(34,197,94,0.35)',  bgTag: 'rgba(34,197,94,0.25)',  colorTag: '#4ade80', gradH: 'linear-gradient(180deg, #4ade80 0%, #16a34a 70%, #15803d 100%)', gradV: 'linear-gradient(90deg, #16a34a 0%, #4ade80 70%, #16a34a 100%)', gradVR: 'linear-gradient(90deg, #16a34a 0%, #4ade80 30%, #16a34a 100%)', glow: '0 0 6px rgba(34,197,94,0.5)' },
                pastel: { base: '#86dba8', light: '#a8e6c1', bg: 'rgba(134,219,168,0.25)', bgTag: 'rgba(134,219,168,0.18)', colorTag: '#86dba8', gradH: 'linear-gradient(180deg, #a8e6c1 0%, #6dc98a 70%, #4da868 100%)', gradV: 'linear-gradient(90deg, #6dc98a 0%, #a8e6c1 70%, #6dc98a 100%)', gradVR: 'linear-gradient(90deg, #6dc98a 0%, #a8e6c1 30%, #6dc98a 100%)', glow: '0 0 4px rgba(134,219,168,0.35)' },
            },
        },
        power: {
            name: '电源',
            shortName: '电源',
            colors: {
                dark:   { base: '#c8922a', light: '#f0c860', bg: 'rgba(200,150,40,0.3)',  bgTag: 'rgba(200,150,40,0.2)',  colorTag: '#d4a848', gradH: 'linear-gradient(180deg, #e8c860 0%, #b88820 70%, #8a6010 100%)', gradV: 'linear-gradient(90deg, #b88820 0%, #e8c860 70%, #b88820 100%)', gradVR: 'linear-gradient(90deg, #b88820 0%, #e8c860 30%, #b88820 100%)', glow: '0 0 6px rgba(200,150,40,0.5)' },
                vivid:  { base: '#eab308', light: '#facc15', bg: 'rgba(234,179,8,0.35)',   bgTag: 'rgba(234,179,8,0.25)',   colorTag: '#facc15', gradH: 'linear-gradient(180deg, #facc15 0%, #ca8a04 70%, #a16207 100%)', gradV: 'linear-gradient(90deg, #ca8a04 0%, #facc15 70%, #ca8a04 100%)', gradVR: 'linear-gradient(90deg, #ca8a04 0%, #facc15 30%, #ca8a04 100%)', glow: '0 0 8px rgba(234,179,8,0.6)' },
                pastel: { base: '#e8c878', light: '#f0d890', bg: 'rgba(232,200,120,0.25)', bgTag: 'rgba(232,200,120,0.18)', colorTag: '#e8c878', gradH: 'linear-gradient(180deg, #f0d890 0%, #d4a848 70%, #b88820 100%)', gradV: 'linear-gradient(90deg, #d4a848 0%, #f0d890 70%, #d4a848 100%)', gradVR: 'linear-gradient(90deg, #d4a848 0%, #f0d890 30%, #d4a848 100%)', glow: '0 0 4px rgba(232,200,120,0.35)' },
            },
        },
        reset: {
            name: '复位',
            shortName: '复位',
            colors: {
                dark:   { base: '#d4554a', light: '#f0685a', bg: 'rgba(200,70,55,0.3)',   bgTag: 'rgba(200,70,55,0.2)',   colorTag: '#e06858', gradH: 'linear-gradient(180deg, #e87060 0%, #b83830 70%, #8a2018 100%)', gradV: 'linear-gradient(90deg, #b83830 0%, #e87060 70%, #b83830 100%)', gradVR: 'linear-gradient(90deg, #b83830 0%, #e87060 30%, #b83830 100%)', glow: '0 0 5px rgba(200,70,55,0.45)' },
                vivid:  { base: '#ef4444', light: '#f87171', bg: 'rgba(239,68,68,0.35)',   bgTag: 'rgba(239,68,68,0.25)',   colorTag: '#f87171', gradH: 'linear-gradient(180deg, #f87171 0%, #dc2626 70%, #b91c1c 100%)', gradV: 'linear-gradient(90deg, #dc2626 0%, #f87171 70%, #dc2626 100%)', gradVR: 'linear-gradient(90deg, #dc2626 0%, #f87171 30%, #dc2626 100%)', glow: '0 0 7px rgba(239,68,68,0.55)' },
                pastel: { base: '#e89890', light: '#f0b0a8', bg: 'rgba(232,152,144,0.25)', bgTag: 'rgba(232,152,144,0.18)', colorTag: '#e89890', gradH: 'linear-gradient(180deg, #f0b0a8 0%, #d48078 70%, #b86860 100%)', gradV: 'linear-gradient(90deg, #d48078 0%, #f0b0a8 70%, #d48078 100%)', gradVR: 'linear-gradient(90deg, #d48078 0%, #f0b0a8 30%, #d48078 100%)', glow: '0 0 4px rgba(232,152,144,0.35)' },
            },
        },
        boot: {
            name: 'BOOT',
            shortName: 'BOOT',
            colors: {
                dark:   { base: '#4a80c0', light: '#5c9ad8', bg: 'rgba(60,120,190,0.3)',  bgTag: 'rgba(60,120,190,0.2)',  colorTag: '#5c9ad8', gradH: 'linear-gradient(180deg, #6a9ed8 0%, #3868a8 70%, #204878 100%)', gradV: 'linear-gradient(90deg, #3868a8 0%, #6a9ed8 70%, #3868a8 100%)', gradVR: 'linear-gradient(90deg, #3868a8 0%, #6a9ed8 30%, #3868a8 100%)', glow: '0 0 5px rgba(60,120,190,0.45)' },
                vivid:  { base: '#3b82f6', light: '#60a5fa', bg: 'rgba(59,130,246,0.35)',  bgTag: 'rgba(59,130,246,0.25)',  colorTag: '#60a5fa', gradH: 'linear-gradient(180deg, #60a5fa 0%, #2563eb 70%, #1d4ed8 100%)', gradV: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 70%, #2563eb 100%)', gradVR: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 30%, #2563eb 100%)', glow: '0 0 7px rgba(59,130,246,0.55)' },
                pastel: { base: '#90b8e8', light: '#a8c8f0', bg: 'rgba(144,184,232,0.25)', bgTag: 'rgba(144,184,232,0.18)', colorTag: '#90b8e8', gradH: 'linear-gradient(180deg, #a8c8f0 0%, #78a8d8 70%, #5890c0 100%)', gradV: 'linear-gradient(90deg, #78a8d8 0%, #a8c8f0 70%, #78a8d8 100%)', gradVR: 'linear-gradient(90deg, #78a8d8 0%, #a8c8f0 30%, #78a8d8 100%)', glow: '0 0 4px rgba(144,184,232,0.35)' },
            },
        },
        clock: {
            name: '时钟',
            shortName: '时钟',
            colors: {
                dark:   { base: '#8a5cb8', light: '#a478d0', bg: 'rgba(130,80,180,0.3)',  bgTag: 'rgba(130,80,180,0.2)',  colorTag: '#a078d0', gradH: 'linear-gradient(180deg, #b090d8 0%, #6a48a0 70%, #4a2890 100%)', gradV: 'linear-gradient(90deg, #6a48a0 0%, #b090d8 70%, #6a48a0 100%)', gradVR: 'linear-gradient(90deg, #6a48a0 0%, #b090d8 30%, #6a48a0 100%)', glow: '0 0 5px rgba(130,80,180,0.4)' },
                vivid:  { base: '#a855f7', light: '#c084fc', bg: 'rgba(168,85,247,0.35)',  bgTag: 'rgba(168,85,247,0.25)',  colorTag: '#c084fc', gradH: 'linear-gradient(180deg, #c084fc 0%, #9333ea 70%, #7e22ce 100%)', gradV: 'linear-gradient(90deg, #9333ea 0%, #c084fc 70%, #9333ea 100%)', gradVR: 'linear-gradient(90deg, #9333ea 0%, #c084fc 30%, #9333ea 100%)', glow: '0 0 7px rgba(168,85,247,0.55)' },
                pastel: { base: '#c0a0e0', light: '#d0b8e8', bg: 'rgba(192,160,224,0.25)', bgTag: 'rgba(192,160,224,0.18)', colorTag: '#c0a0e0', gradH: 'linear-gradient(180deg, #d0b8e8 0%, #a888d0 70%, #8870b8 100%)', gradV: 'linear-gradient(90deg, #a888d0 0%, #d0b8e8 70%, #a888d0 100%)', gradVR: 'linear-gradient(90deg, #a888d0 0%, #d0b8e8 30%, #a888d0 100%)', glow: '0 0 4px rgba(192,160,224,0.35)' },
            },
        },
        jtag: {
            name: 'JTAG/SWD',
            shortName: 'JTAG',
            colors: {
                dark:   { base: '#3d9090', light: '#50b0b0', bg: 'rgba(50,150,150,0.3)',  bgTag: 'rgba(50,150,150,0.2)',  colorTag: '#50b0b0', gradH: 'linear-gradient(180deg, #5aaaaa 0%, #287878 70%, #185858 100%)', gradV: 'linear-gradient(90deg, #287878 0%, #5aaaaa 70%, #287878 100%)', gradVR: 'linear-gradient(90deg, #287878 0%, #5aaaaa 30%, #287878 100%)', glow: '0 0 5px rgba(50,150,150,0.4)' },
                vivid:  { base: '#06b6d4', light: '#22d3ee', bg: 'rgba(6,182,212,0.35)',   bgTag: 'rgba(6,182,212,0.25)',   colorTag: '#22d3ee', gradH: 'linear-gradient(180deg, #22d3ee 0%, #0891b2 70%, #0e7490 100%)', gradV: 'linear-gradient(90deg, #0891b2 0%, #22d3ee 70%, #0891b2 100%)', gradVR: 'linear-gradient(90deg, #0891b2 0%, #22d3ee 30%, #0891b2 100%)', glow: '0 0 7px rgba(6,182,212,0.55)' },
                pastel: { base: '#80c8c8', light: '#a0d8d8', bg: 'rgba(128,200,200,0.25)', bgTag: 'rgba(128,200,200,0.18)', colorTag: '#80c8c8', gradH: 'linear-gradient(180deg, #a0d8c8 0%, #68b0b0 70%, #489898 100%)', gradV: 'linear-gradient(90deg, #68b0b0 0%, #a0d8c8 70%, #68b0b0 100%)', gradVR: 'linear-gradient(90deg, #68b0b0 0%, #a0d8c8 30%, #489898 100%)', glow: '0 0 4px rgba(128,200,200,0.35)' },
            },
        },
        analog: {
            name: '模拟',
            shortName: '模拟',
            colors: {
                dark:   { base: '#b85a88', light: '#d070a0', bg: 'rgba(180,80,120,0.3)',  bgTag: 'rgba(180,80,120,0.2)',  colorTag: '#c86898', gradH: 'linear-gradient(180deg, #d080a8 0%, #904060 70%, #682838 100%)', gradV: 'linear-gradient(90deg, #904060 0%, #d080a8 70%, #904060 100%)', gradVR: 'linear-gradient(90deg, #904060 0%, #d080a8 30%, #904060 100%)', glow: '0 0 5px rgba(180,80,120,0.4)' },
                vivid:  { base: '#ec4899', light: '#f472b6', bg: 'rgba(236,72,153,0.35)',  bgTag: 'rgba(236,72,153,0.25)',  colorTag: '#f472b6', gradH: 'linear-gradient(180deg, #f472b6 0%, #db2777 70%, #be185d 100%)', gradV: 'linear-gradient(90deg, #db2777 0%, #f472b6 70%, #db2777 100%)', gradVR: 'linear-gradient(90deg, #db2777 0%, #f472b6 30%, #db2777 100%)', glow: '0 0 7px rgba(236,72,153,0.55)' },
                pastel: { base: '#e0a0c0', light: '#e8b8d0', bg: 'rgba(224,160,192,0.25)', bgTag: 'rgba(224,160,192,0.18)', colorTag: '#e0a0c0', gradH: 'linear-gradient(180deg, #e8b8d0 0%, #c888a8 70%, #a87090 100%)', gradV: 'linear-gradient(90deg, #c888a8 0%, #e8b8d0 70%, #c888a8 100%)', gradVR: 'linear-gradient(90deg, #c888a8 0%, #e8b8d0 30%, #c888a8 100%)', glow: '0 0 4px rgba(224,160,192,0.35)' },
            },
        },
    },
};
=======
const categoryConfig = {
    activeScheme: 'dark',
    schemes: {
        dark: '深色主题',
        vivid: '鲜艳主题',
        pastel: '柔和主题',
    },
    categories: {
        gpio: {
            name: 'GPIO',
            shortName: 'GPIO',
            colors: {
                dark:   { base: '#4da868', light: '#6fd488', bg: 'rgba(77,168,104,0.3)', bgTag: 'rgba(77,168,104,0.2)', colorTag: '#5cb878', gradH: 'linear-gradient(180deg, #6ba878 0%, #3d7a50 70%, #2d5a38 100%)', gradV: 'linear-gradient(90deg, #3d7a50 0%, #6ba878 70%, #3d7a50 100%)', gradVR: 'linear-gradient(90deg, #3d7a50 0%, #6ba878 30%, #3d7a50 100%)', glow: '0 0 4px rgba(77,168,104,0.4)' },
                vivid:  { base: '#22c55e', light: '#4ade80', bg: 'rgba(34,197,94,0.35)',  bgTag: 'rgba(34,197,94,0.25)',  colorTag: '#4ade80', gradH: 'linear-gradient(180deg, #4ade80 0%, #16a34a 70%, #15803d 100%)', gradV: 'linear-gradient(90deg, #16a34a 0%, #4ade80 70%, #16a34a 100%)', gradVR: 'linear-gradient(90deg, #16a34a 0%, #4ade80 30%, #16a34a 100%)', glow: '0 0 6px rgba(34,197,94,0.5)' },
                pastel: { base: '#86dba8', light: '#a8e6c1', bg: 'rgba(134,219,168,0.25)', bgTag: 'rgba(134,219,168,0.18)', colorTag: '#86dba8', gradH: 'linear-gradient(180deg, #a8e6c1 0%, #6dc98a 70%, #4da868 100%)', gradV: 'linear-gradient(90deg, #6dc98a 0%, #a8e6c1 70%, #6dc98a 100%)', gradVR: 'linear-gradient(90deg, #6dc98a 0%, #a8e6c1 30%, #6dc98a 100%)', glow: '0 0 4px rgba(134,219,168,0.35)' },
            },
        },
        power: {
            name: '电源',
            shortName: '电源',
            colors: {
                dark:   { base: '#c8922a', light: '#f0c860', bg: 'rgba(200,150,40,0.3)',  bgTag: 'rgba(200,150,40,0.2)',  colorTag: '#d4a848', gradH: 'linear-gradient(180deg, #e8c860 0%, #b88820 70%, #8a6010 100%)', gradV: 'linear-gradient(90deg, #b88820 0%, #e8c860 70%, #b88820 100%)', gradVR: 'linear-gradient(90deg, #b88820 0%, #e8c860 30%, #b88820 100%)', glow: '0 0 6px rgba(200,150,40,0.5)' },
                vivid:  { base: '#eab308', light: '#facc15', bg: 'rgba(234,179,8,0.35)',   bgTag: 'rgba(234,179,8,0.25)',   colorTag: '#facc15', gradH: 'linear-gradient(180deg, #facc15 0%, #ca8a04 70%, #a16207 100%)', gradV: 'linear-gradient(90deg, #ca8a04 0%, #facc15 70%, #ca8a04 100%)', gradVR: 'linear-gradient(90deg, #ca8a04 0%, #facc15 30%, #ca8a04 100%)', glow: '0 0 8px rgba(234,179,8,0.6)' },
                pastel: { base: '#e8c878', light: '#f0d890', bg: 'rgba(232,200,120,0.25)', bgTag: 'rgba(232,200,120,0.18)', colorTag: '#e8c878', gradH: 'linear-gradient(180deg, #f0d890 0%, #d4a848 70%, #b88820 100%)', gradV: 'linear-gradient(90deg, #d4a848 0%, #f0d890 70%, #d4a848 100%)', gradVR: 'linear-gradient(90deg, #d4a848 0%, #f0d890 30%, #d4a848 100%)', glow: '0 0 4px rgba(232,200,120,0.35)' },
            },
        },
        reset: {
            name: '复位',
            shortName: '复位',
            colors: {
                dark:   { base: '#d4554a', light: '#f0685a', bg: 'rgba(200,70,55,0.3)',   bgTag: 'rgba(200,70,55,0.2)',   colorTag: '#e06858', gradH: 'linear-gradient(180deg, #e87060 0%, #b83830 70%, #8a2018 100%)', gradV: 'linear-gradient(90deg, #b83830 0%, #e87060 70%, #b83830 100%)', gradVR: 'linear-gradient(90deg, #b83830 0%, #e87060 30%, #b83830 100%)', glow: '0 0 5px rgba(200,70,55,0.45)' },
                vivid:  { base: '#ef4444', light: '#f87171', bg: 'rgba(239,68,68,0.35)',   bgTag: 'rgba(239,68,68,0.25)',   colorTag: '#f87171', gradH: 'linear-gradient(180deg, #f87171 0%, #dc2626 70%, #b91c1c 100%)', gradV: 'linear-gradient(90deg, #dc2626 0%, #f87171 70%, #dc2626 100%)', gradVR: 'linear-gradient(90deg, #dc2626 0%, #f87171 30%, #dc2626 100%)', glow: '0 0 7px rgba(239,68,68,0.55)' },
                pastel: { base: '#e89890', light: '#f0b0a8', bg: 'rgba(232,152,144,0.25)', bgTag: 'rgba(232,152,144,0.18)', colorTag: '#e89890', gradH: 'linear-gradient(180deg, #f0b0a8 0%, #d48078 70%, #b86860 100%)', gradV: 'linear-gradient(90deg, #d48078 0%, #f0b0a8 70%, #d48078 100%)', gradVR: 'linear-gradient(90deg, #d48078 0%, #f0b0a8 30%, #d48078 100%)', glow: '0 0 4px rgba(232,152,144,0.35)' },
            },
        },
        boot: {
            name: 'BOOT',
            shortName: 'BOOT',
            colors: {
                dark:   { base: '#4a80c0', light: '#5c9ad8', bg: 'rgba(60,120,190,0.3)',  bgTag: 'rgba(60,120,190,0.2)',  colorTag: '#5c9ad8', gradH: 'linear-gradient(180deg, #6a9ed8 0%, #3868a8 70%, #204878 100%)', gradV: 'linear-gradient(90deg, #3868a8 0%, #6a9ed8 70%, #3868a8 100%)', gradVR: 'linear-gradient(90deg, #3868a8 0%, #6a9ed8 30%, #3868a8 100%)', glow: '0 0 5px rgba(60,120,190,0.45)' },
                vivid:  { base: '#3b82f6', light: '#60a5fa', bg: 'rgba(59,130,246,0.35)',  bgTag: 'rgba(59,130,246,0.25)',  colorTag: '#60a5fa', gradH: 'linear-gradient(180deg, #60a5fa 0%, #2563eb 70%, #1d4ed8 100%)', gradV: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 70%, #2563eb 100%)', gradVR: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 30%, #2563eb 100%)', glow: '0 0 7px rgba(59,130,246,0.55)' },
                pastel: { base: '#90b8e8', light: '#a8c8f0', bg: 'rgba(144,184,232,0.25)', bgTag: 'rgba(144,184,232,0.18)', colorTag: '#90b8e8', gradH: 'linear-gradient(180deg, #a8c8f0 0%, #78a8d8 70%, #5890c0 100%)', gradV: 'linear-gradient(90deg, #78a8d8 0%, #a8c8f0 70%, #78a8d8 100%)', gradVR: 'linear-gradient(90deg, #78a8d8 0%, #a8c8f0 30%, #78a8d8 100%)', glow: '0 0 4px rgba(144,184,232,0.35)' },
            },
        },
        clock: {
            name: '时钟',
            shortName: '时钟',
            colors: {
                dark:   { base: '#8a5cb8', light: '#a478d0', bg: 'rgba(130,80,180,0.3)',  bgTag: 'rgba(130,80,180,0.2)',  colorTag: '#a078d0', gradH: 'linear-gradient(180deg, #b090d8 0%, #6a48a0 70%, #4a2890 100%)', gradV: 'linear-gradient(90deg, #6a48a0 0%, #b090d8 70%, #6a48a0 100%)', gradVR: 'linear-gradient(90deg, #6a48a0 0%, #b090d8 30%, #6a48a0 100%)', glow: '0 0 5px rgba(130,80,180,0.4)' },
                vivid:  { base: '#a855f7', light: '#c084fc', bg: 'rgba(168,85,247,0.35)',  bgTag: 'rgba(168,85,247,0.25)',  colorTag: '#c084fc', gradH: 'linear-gradient(180deg, #c084fc 0%, #9333ea 70%, #7e22ce 100%)', gradV: 'linear-gradient(90deg, #9333ea 0%, #c084fc 70%, #9333ea 100%)', gradVR: 'linear-gradient(90deg, #9333ea 0%, #c084fc 30%, #9333ea 100%)', glow: '0 0 7px rgba(168,85,247,0.55)' },
                pastel: { base: '#c0a0e0', light: '#d0b8e8', bg: 'rgba(192,160,224,0.25)', bgTag: 'rgba(192,160,224,0.18)', colorTag: '#c0a0e0', gradH: 'linear-gradient(180deg, #d0b8e8 0%, #a888d0 70%, #8870b8 100%)', gradV: 'linear-gradient(90deg, #a888d0 0%, #d0b8e8 70%, #a888d0 100%)', gradVR: 'linear-gradient(90deg, #a888d0 0%, #d0b8e8 30%, #a888d0 100%)', glow: '0 0 4px rgba(192,160,224,0.35)' },
            },
        },
        jtag: {
            name: 'JTAG/SWD',
            shortName: 'JTAG',
            colors: {
                dark:   { base: '#3d9090', light: '#50b0b0', bg: 'rgba(50,150,150,0.3)',  bgTag: 'rgba(50,150,150,0.2)',  colorTag: '#50b0b0', gradH: 'linear-gradient(180deg, #5aaaaa 0%, #287878 70%, #185858 100%)', gradV: 'linear-gradient(90deg, #287878 0%, #5aaaaa 70%, #287878 100%)', gradVR: 'linear-gradient(90deg, #287878 0%, #5aaaaa 30%, #287878 100%)', glow: '0 0 5px rgba(50,150,150,0.4)' },
                vivid:  { base: '#06b6d4', light: '#22d3ee', bg: 'rgba(6,182,212,0.35)',   bgTag: 'rgba(6,182,212,0.25)',   colorTag: '#22d3ee', gradH: 'linear-gradient(180deg, #22d3ee 0%, #0891b2 70%, #0e7490 100%)', gradV: 'linear-gradient(90deg, #0891b2 0%, #22d3ee 70%, #0891b2 100%)', gradVR: 'linear-gradient(90deg, #0891b2 0%, #22d3ee 30%, #0891b2 100%)', glow: '0 0 7px rgba(6,182,212,0.55)' },
                pastel: { base: '#80c8c8', light: '#a0d8d8', bg: 'rgba(128,200,200,0.25)', bgTag: 'rgba(128,200,200,0.18)', colorTag: '#80c8c8', gradH: 'linear-gradient(180deg, #a0d8c8 0%, #68b0b0 70%, #489898 100%)', gradV: 'linear-gradient(90deg, #68b0b0 0%, #a0d8c8 70%, #68b0b0 100%)', gradVR: 'linear-gradient(90deg, #68b0b0 0%, #a0d8c8 30%, #489898 100%)', glow: '0 0 4px rgba(128,200,200,0.35)' },
            },
        },
        analog: {
            name: '模拟',
            shortName: '模拟',
            colors: {
                dark:   { base: '#b85a88', light: '#d070a0', bg: 'rgba(180,80,120,0.3)',  bgTag: 'rgba(180,80,120,0.2)',  colorTag: '#c86898', gradH: 'linear-gradient(180deg, #d080a8 0%, #904060 70%, #682838 100%)', gradV: 'linear-gradient(90deg, #904060 0%, #d080a8 70%, #904060 100%)', gradVR: 'linear-gradient(90deg, #904060 0%, #d080a8 30%, #904060 100%)', glow: '0 0 5px rgba(180,80,120,0.4)' },
                vivid:  { base: '#ec4899', light: '#f472b6', bg: 'rgba(236,72,153,0.35)',  bgTag: 'rgba(236,72,153,0.25)',  colorTag: '#f472b6', gradH: 'linear-gradient(180deg, #f472b6 0%, #db2777 70%, #be185d 100%)', gradV: 'linear-gradient(90deg, #db2777 0%, #f472b6 70%, #db2777 100%)', gradVR: 'linear-gradient(90deg, #db2777 0%, #f472b6 30%, #db2777 100%)', glow: '0 0 7px rgba(236,72,153,0.55)' },
                pastel: { base: '#e0a0c0', light: '#e8b8d0', bg: 'rgba(224,160,192,0.25)', bgTag: 'rgba(224,160,192,0.18)', colorTag: '#e0a0c0', gradH: 'linear-gradient(180deg, #e8b8d0 0%, #c888a8 70%, #a87090 100%)', gradV: 'linear-gradient(90deg, #c888a8 0%, #e8b8d0 70%, #c888a8 100%)', gradVR: 'linear-gradient(90deg, #c888a8 0%, #e8b8d0 30%, #c888a8 100%)', glow: '0 0 4px rgba(224,160,192,0.35)' },
            },
        },
    },
};
>>>>>>> 53609b4b186f5c5178629d93f4e4c170b42854c9
