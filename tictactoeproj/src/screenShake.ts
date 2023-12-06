
// Screenshake
import createScreenShake from 'screen-shake'

const screenShake = createScreenShake()


createScreenShake({
    // The maximum amount of angle movement.
    maxAngle = 10,
    // The maximum amount of x offset movement.
    maxOffsetX = 30,
    // The maximum amount of y offset movement.
    maxOffsetY = 30,
    // How much trauma is reduced per update. Tweak this if you want to change the duration of the screen shake. A higher value means a shorter duration.
    traumaReductionPerUpdate = 0.02,
  })

  export default createScreenShake()