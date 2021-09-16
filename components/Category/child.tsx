import React, { useState } from 'react';

const Child = (props :any) => {
    return (
        <>
            <button onClick={() => props.setSelectedcity("광광")}>
                추천장소보기
            </button>
        </>
    );
};

export default Child;