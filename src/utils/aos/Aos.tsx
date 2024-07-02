"use client"
import React, { useEffect } from 'react'
import Aos from 'aos';

function AOSInit() {
    useEffect(() => {
        Aos.init();
    }, [])
    return null
}

export default AOSInit