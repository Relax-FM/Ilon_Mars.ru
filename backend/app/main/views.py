timeWindow = {'now':'empty','next': 'empty'}

import threading
import time

def check_time_window():
    while True:
        print(timeWindow)
        time.sleep(10)  # Подождать 5 секунду перед следующей проверкой времени

# Запускаем функцию в отдельном потоке
time_window_thread = threading.Thread(target=check_time_window)
time_window_thread.daemon = True  # Поток будет остановлен при завершении основного процесса
time_window_thread.start()

# Продолжаем выполнение основного кода
