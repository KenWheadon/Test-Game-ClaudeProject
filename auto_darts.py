import pyautogui
import time
import random

def perform_actions():
    # Click the mouse
    pyautogui.click()
    print("Action: Clicked the mouse")
    
    # Wait 1.2-2.4 seconds
    wait_time = random.uniform(1.0, 2.6)
    print(f"Waiting for {wait_time:.2f} seconds")
    time.sleep(wait_time)
    
    # Press the space key
    pyautogui.press('space')
    print("Action: Pressed space")

def countdown(total_seconds):
    start_time = time.time()
    while True:
        elapsed_time = time.time() - start_time
        remaining_time = total_seconds - elapsed_time
        
        if remaining_time <= 0:
            break
        
        if int(elapsed_time) % 10 == 0:
            print(f"Next action set in: {remaining_time:.1f} seconds")
        
        time.sleep(0.1)  # Small sleep to prevent high CPU usage

def run_script():
    action_count = 0
    try:
        while True:
            action_count += 1
            print(f"\nPerforming action set #{action_count}")
            perform_actions()
            
            # Wait 35.2-42.3 seconds
            wait_seconds = random.uniform(35.1, 36.3)
            print(f"\nWaiting for {wait_seconds:.1f} seconds")
            
            countdown(wait_seconds)
            
    except KeyboardInterrupt:
        print("\nScript stopped by user")

if __name__ == "__main__":
    print("Starting the script. Press Ctrl+C to stop.")
    run_script()