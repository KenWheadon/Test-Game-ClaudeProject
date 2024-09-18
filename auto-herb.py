import pyautogui
import time
import random
import threading
import sys

# Flag to control the script execution
running = True

def countdown(seconds):
    start_time = time.time()
    while running:
        elapsed = time.time() - start_time
        remaining = seconds - elapsed
        if remaining <= 0:
            break
        time.sleep(0.1)

def perform_action(action, key=None, pause=0):
    global running
    if not running:
        return
    
    if action == "click":
        print("Mouse click")
        pyautogui.click()
    elif action == "press":
        print(f"Pressing key: {key}")
        pyautogui.press(key)
    
    wait_time = pause + random.uniform(-0.1, 0.1)  # Add small random variation
    print(f"Waiting for {wait_time:.2f} seconds")
    countdown(wait_time)

def potion_crafting_cycle():
    while running:
        # perform_action("click", pause=1)  # Open Item Bank Screen
        # perform_action("press", key="3", pause=1)  # Deposit all inventory into Bank
        # perform_action("press", key="f1", pause=1)  # Withdraw preload inventory
        # perform_action("press", key="1", pause=1)  # Clean herbs
        # perform_action("press", key="space", pause=7)  # Select All
        # perform_action("press", key="2", pause=1)  # Add herb to vial
        # perform_action("press", key="space", pause=11.5)  # Select All
        # perform_action("press", key="3", pause=1)  # Add ingredient to vial
        # perform_action("press", key="space", pause=12.5)  # Select All
        perform_action("click", pause=1)  # Open Item Bank Screen
        perform_action("press", key="3", pause=1)  # Deposit all inventory into Bank
        perform_action("press", key="f2", pause=1)  # Withdraw second preload inventory
        perform_action("press", key="4", pause=1)  # Clean herbs
        perform_action("press", key="space", pause=7)  # Select All
        perform_action("press", key="5", pause=1)  # Add herb to vial
        perform_action("press", key="space", pause=11.5)  # Select All
        perform_action("press", key="6", pause=1)  # Add ingredient to vial
        perform_action("press", key="space", pause=12.5)  # Select All

def run_potion_crafting():
    global running
    try:
        thread = threading.Thread(target=potion_crafting_cycle)
        thread.start()
        
        while True:
            time.sleep(0.1)
    except KeyboardInterrupt:
        print("\nStopping Potion Crafting script...")
        running = False
        thread.join()
        print("Potion Crafting script stopped.")

if __name__ == "__main__":
    print("Starting Potion Crafting script. Press Ctrl+C to stop.")
    run_potion_crafting()