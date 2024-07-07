import React, { useState } from 'react';
import './skillInfo.scss'

function SkillInfo() {
    const [open, setOpen] = useState(false);
    return (
        <div className='infoField'>
            <button  onClick={() => setOpen(!open)}>SkillInfo</button>
            {open 
                ? <div className='infoField__tooltip'>
                    <p>
                        dice: 0-5 -&gt; miss, 6-15 -&gt; 10dmg, 16-20 -&gt; 20dmg <br/>
                        damageSkill: 0-4 -&gt; miss, 5-17 -&gt; (1.2*dice)dmg, 18-20 -&gt; 25dmg <br/>
                        heal: (2*dice)
                    </p>
                  </div> 
                : <></>}
        </div>
    );
}

export default SkillInfo;