"use client"

import { useEffect, useRef } from "react"
import EmergencyButtons from "./hk-components"
import styles from "./hk-emergencycontrol.module.css"

export default function EmergencyControl() {
  const videoRefs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    // Set up video loops
    videoRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.play()
      }
    })
  }, []) // Removed videoRefs from dependency array

  return (
    <div className={styles.emergencyContainer}>
      <h1 className={styles.emergencyTitle}>Emergency Control Center</h1>

      <div className={styles.cctvGrid}>
        <div className={styles.cctvMain}>
          <div className={styles.feedContainer}>
            <video ref={videoRefs[0]} className={styles.cctvFeed} muted loop playsInline>
              <source src="/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.timestamp}>Camera 1 - Main Entrance</div>
          </div>
        </div>

        <div className={styles.cctvSecondary}>
          <div className={styles.cctvFeedContainer}>
            <div className={styles.feedContainer}>
              <video ref={videoRefs[1]} className={styles.cctvFeed} muted loop playsInline>
                <source src="/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={styles.timestamp}>Camera 2 - Corridor</div>
            </div>
          </div>

          <div className={styles.cctvFeedContainer}>
            <div className={styles.feedContainer}>
              <video ref={videoRefs[2]} className={styles.cctvFeed} muted loop playsInline>
                <source src="/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={styles.timestamp}>Camera 3 - Parking</div>
            </div>
          </div>
        </div>
      </div>

      <EmergencyButtons />
    </div>
  )
}