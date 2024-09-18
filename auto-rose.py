import pyautogui
import time
import random
import threading
import sys

# Flag to control the script execution
running = True

def countdown(seconds, countdown_points):
    start_time = time.time()
    while running:
        elapsed = time.time() - start_time
        remaining = seconds - elapsed
        if remaining <= 0:
            break
        if int(remaining) in countdown_points:
            print(f"{int(remaining)}...")
        time.sleep(0.1)

def action_set_1():
    while running:
        print("Executing Action Set 1: Mouse Click")
        pyautogui.click()
        print("Mouse clicked")
        wait_time = random.uniform(10.0, 15.2)
        print(f"Next Action Set 1 in: {wait_time:.1f} seconds")
        countdown(wait_time, [3, 2, 1])

def action_set_2():
    while running:
        print("Executing Action Set 2: Key Sequence")
        keys = [3]
        for key in keys:
            pyautogui.press(str(key))
            print(f"Pressed key: {key}")
            time.sleep(0.25)
        pyautogui.press('space')
        wait_time = random.uniform(90.0, 120.5)
        print(f"Next Action Set 2 in: {wait_time:.1f} seconds")
        countdown(wait_time, [60, 30, 10, 3, 2, 1])

def run_grape_time():
    global running
    try:
        thread1 = threading.Thread(target=action_set_1)
        # thread2 = threading.Thread(target=action_set_2)
        
        thread1.start()
        # thread2.start()
        
        while True:
            time.sleep(0.1)
    except KeyboardInterrupt:
        print("\nStopping Rose Time script...")
        running = False
        thread1.join()
        # thread2.join()
        print("Rose Time script stopped.")

if __name__ == "__main__":
    print("Starting Rose Time script. Press Ctrl+C to stop.")
    run_grape_time()