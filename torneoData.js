const torneoGalactico = {
    faseActual: "grupos", // Indica la fase actual: "grupos", "octavos", etc.
    grupos: [
        {
            id: "grupo_a",
            nombre: "Grupo A - Rocosos",
            participantes: [
                { id: "p_a1", nombre: "Participante 1", foto: "img/torneo/p1.png", votos: 0 },
                { id: "p_a2", nombre: "Participante 2", foto: "img/torneo/p2.png", votos: 0 },
                { id: "p_a3", nombre: "Participante 3", foto: "img/torneo/p3.png", votos: 0 },
                { id: "p_a4", nombre: "Participante 4", foto: "img/torneo/p4.png", votos: 0 }
            ]
        },
        {
            id: "grupo_b",
            nombre: "Grupo B - Gaseosos",
            participantes: [
                { id: "p_b1", nombre: "Participante 1", foto: "img/torneo/p5.png", votos: 0 },
                { id: "p_b2", nombre: "Participante 2", foto: "img/torneo/p6.png", votos: 0 },
                { id: "p_b3", nombre: "Participante 3", foto: "img/torneo/p7.png", votos: 0 },
                { id: "p_b4", nombre: "Participante 4", foto: "img/torneo/p8.png", votos: 0 }
            ]
        },
        {
            id: "grupo_c",
            nombre: "Grupo C - Helados",
            participantes: [
                { id: "p_c1", nombre: "Participante 1", foto: "img/torneo/p9.png", votos: 0 },
                { id: "p_c2", nombre: "Participante 2", foto: "img/torneo/p10.png", votos: 0 },
                { id: "p_c3", nombre: "Participante 3", foto: "img/torneo/p11.png", votos: 0 },
                { id: "p_c4", nombre: "Participante 4", foto: "img/torneo/p12.png", votos: 0 }
            ]
        },
        {
            id: "grupo_d",
            nombre: "Grupo D",
            participantes: [
                { id: "p_d1", nombre: "Participante 1", foto: "img/torneo/p13.png", votos: 0 },
                { id: "p_d2", nombre: "Participante 2", foto: "img/torneo/p14.png", votos: 0 },
                { id: "p_d3", nombre: "Participante 3", foto: "img/torneo/p15.png", votos: 0 },
                { id: "p_d4", nombre: "Participante 4", foto: "img/torneo/p16.png", votos: 0 }
            ]
        },
        {
            id: "grupo_e",
            nombre: "Grupo E",
            participantes: [
                { id: "p_e1", nombre: "Participante 1", foto: "img/torneo/p17.png", votos: 0 },
                { id: "p_e2", nombre: "Participante 2", foto: "img/torneo/p18.png", votos: 0 },
                { id: "p_e3", nombre: "Participante 3", foto: "img/torneo/p19.png", votos: 0 },
                { id: "p_e4", nombre: "Participante 4", foto: "img/torneo/p20.png", votos: 0 }
            ]
        },
        {
            id: "grupo_f",
            nombre: "Grupo F",
            participantes: [
                { id: "p_f1", nombre: "Participante 1", foto: "img/torneo/p21.png", votos: 0 },
                { id: "p_f2", nombre: "Participante 2", foto: "img/torneo/p22.png", votos: 0 },
                { id: "p_f3", nombre: "Participante 3", foto: "img/torneo/p23.png", votos: 0 },
                { id: "p_f4", nombre: "Participante 4", foto: "img/torneo/p24.png", votos: 0 }
            ]
        },
        {
            id: "grupo_g",
            nombre: "Grupo G",
            participantes: [
                { id: "p_g1", nombre: "Participante 1", foto: "img/torneo/p25.png", votos: 0 },
                { id: "p_g2", nombre: "Participante 2", foto: "img/torneo/p26.png", votos: 0 },
                { id: "p_g3", nombre: "Participante 3", foto: "img/torneo/p27.png", votos: 0 },
                { id: "p_g4", nombre: "Participante 4", foto: "img/torneo/p28.png", votos: 0 }
            ]
        },
        {
            id: "grupo_h",
            nombre: "Grupo H",
            participantes: [
                { id: "p_h1", nombre: "Participante 1", foto: "img/torneo/p29.png", votos: 0 },
                { id: "p_h2", nombre: "Participante 2", foto: "img/torneo/p30.png", votos: 0 },
                { id: "p_h3", nombre: "Participante 3", foto: "img/torneo/p31.png", votos: 0 },
                { id: "p_h4", nombre: "Participante 4", foto: "img/torneo/p32.png", votos: 0 }
            ]
        },
        {
            id: "grupo_i",
            nombre: "Grupo I",
            participantes: [
                { id: "p_i1", nombre: "Participante 1", foto: "img/torneo/p33.png", votos: 0 },
                { id: "p_i2", nombre: "Participante 2", foto: "img/torneo/p34.png", votos: 0 },
                { id: "p_i3", nombre: "Participante 3", foto: "img/torneo/p35.png", votos: 0 },
                { id: "p_i4", nombre: "Participante 4", foto: "img/torneo/p36.png", votos: 0 }
            ]
        },
        {
            id: "grupo_j",
            nombre: "Grupo J",
            participantes: [
                { id: "p_j1", nombre: "Participante 1", foto: "img/torneo/p37.png", votos: 0 },
                { id: "p_j2", nombre: "Participante 2", foto: "img/torneo/p38.png", votos: 0 },
                { id: "p_j3", nombre: "Participante 3", foto: "img/torneo/p39.png", votos: 0 },
                { id: "p_j4", nombre: "Participante 4", foto: "img/torneo/p40.png", votos: 0 }
            ]
        },
        {
            id: "grupo_k",
            nombre: "Grupo K",
            participantes: [
                { id: "p_k1", nombre: "Participante 1", foto: "img/torneo/p41.png", votos: 0 },
                { id: "p_k2", nombre: "Participante 2", foto: "img/torneo/p42.png", votos: 0 },
                { id: "p_k3", nombre: "Participante 3", foto: "img/torneo/p43.png", votos: 0 },
                { id: "p_k4", nombre: "Participante 4", foto: "img/torneo/p44.png", votos: 0 }
            ]
        },
        {
            id: "grupo_l",
            nombre: "Grupo L",
            participantes: [
                { id: "p_l1", nombre: "Participante 1", foto: "img/torneo/p45.png", votos: 0 },
                { id: "p_l2", nombre: "Participante 2", foto: "img/torneo/p46.png", votos: 0 },
                { id: "p_l3", nombre: "Participante 3", foto: "img/torneo/p47.png", votos: 0 },
                { id: "p_l4", nombre: "Participante 4", foto: "img/torneo/p48.png", votos: 0 }
            ]
        },
        {
            id: "grupo_m",
            nombre: "Grupo M",
            participantes: [
                { id: "p_m1", nombre: "Participante 1", foto: "img/torneo/p49.png", votos: 0 },
                { id: "p_m2", nombre: "Participante 2", foto: "img/torneo/p50.png", votos: 0 },
                { id: "p_m3", nombre: "Participante 3", foto: "img/torneo/p51.png", votos: 0 },
                { id: "p_m4", nombre: "Participante 4", foto: "img/torneo/p52.png", votos: 0 }
            ]
        },
        {
            id: "grupo_n",
            nombre: "Grupo N",
            participantes: [
                { id: "p_n1", nombre: "Participante 1", foto: "img/torneo/p53.png", votos: 0 },
                { id: "p_n2", nombre: "Participante 2", foto: "img/torneo/p54.png", votos: 0 },
                { id: "p_n3", nombre: "Participante 3", foto: "img/torneo/p55.png", votos: 0 },
                { id: "p_n4", nombre: "Participante 4", foto: "img/torneo/p56.png", votos: 0 }
            ]
        },
        {
            id: "grupo_o",
            nombre: "Grupo O",
            participantes: [
                { id: "p_o1", nombre: "Participante 1", foto: "img/torneo/p57.png", votos: 0 },
                { id: "p_o2", nombre: "Participante 2", foto: "img/torneo/p58.png", votos: 0 },
                { id: "p_o3", nombre: "Participante 3", foto: "img/torneo/p59.png", votos: 0 },
                { id: "p_o4", nombre: "Participante 4", foto: "img/torneo/p60.png", votos: 0 }
            ]
        },
        {
            id: "grupo_p",
            nombre: "Grupo P",
            participantes: [
                { id: "p_p1", nombre: "Participante 1", foto: "img/torneo/p61.png", votos: 0 },
                { id: "p_p2", nombre: "Participante 2", foto: "img/torneo/p62.png", votos: 0 },
                { id: "p_p3", nombre: "Participante 3", foto: "img/torneo/p63.png", votos: 0 },
                { id: "p_p4", nombre: "Participante 4", foto: "img/torneo/p64.png", votos: 0 }
            ]
        },
        {
            id: "grupo_q",
            nombre: "Grupo Q",
            participantes: [
                { id: "p_q1", nombre: "Participante 1", foto: "img/torneo/p65.png", votos: 0 },
                { id: "p_q2", nombre: "Participante 2", foto: "img/torneo/p66.png", votos: 0 },
                { id: "p_q3", nombre: "Participante 3", foto: "img/torneo/p67.png", votos: 0 },
                { id: "p_q4", nombre: "Participante 4", foto: "img/torneo/p68.png", votos: 0 }
            ]
        },
        {
            id: "grupo_r",
            nombre: "Grupo R",
            participantes: [
                { id: "p_r1", nombre: "Participante 1", foto: "img/torneo/p69.png", votos: 0 },
                { id: "p_r2", nombre: "Participante 2", foto: "img/torneo/p70.png", votos: 0 },
                { id: "p_r3", nombre: "Participante 3", foto: "img/torneo/p71.png", votos: 0 },
                { id: "p_r4", nombre: "Participante 4", foto: "img/torneo/p72.png", votos: 0 }
            ]
        },
        {
            id: "grupo_s",
            nombre: "Grupo S",
            participantes: [
                { id: "p_s1", nombre: "Participante 1", foto: "img/torneo/p73.png", votos: 0 },
                { id: "p_s2", nombre: "Participante 2", foto: "img/torneo/p74.png", votos: 0 },
                { id: "p_s3", nombre: "Participante 3", foto: "img/torneo/p75.png", votos: 0 },
                { id: "p_s4", nombre: "Participante 4", foto: "img/torneo/p76.png", votos: 0 }
            ]
        },
        {
            id: "grupo_t",
            nombre: "Grupo T",
            participantes: [
                { id: "p_t1", nombre: "Participante 1", foto: "img/torneo/p77.png", votos: 0 },
                { id: "p_t2", nombre: "Participante 2", foto: "img/torneo/p78.png", votos: 0 },
                { id: "p_t3", nombre: "Participante 3", foto: "img/torneo/p79.png", votos: 0 },
                { id: "p_t4", nombre: "Participante 4", foto: "img/torneo/p80.png", votos: 0 }
            ]
        },
        {
            id: "grupo_u",
            nombre: "Grupo U",
            participantes: [
                { id: "p_u1", nombre: "Participante 1", foto: "img/torneo/p81.png", votos: 0 },
                { id: "p_u2", nombre: "Participante 2", foto: "img/torneo/p82.png", votos: 0 },
                { id: "p_u3", nombre: "Participante 3", foto: "img/torneo/p83.png", votos: 0 },
                { id: "p_u4", nombre: "Participante 4", foto: "img/torneo/p84.png", votos: 0 }
            ]
        }
    ]
};