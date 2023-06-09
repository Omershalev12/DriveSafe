import json
import generate_data
from flask import Flask, render_template
import pandas as pd
import os

app = Flask(__name__)

@app.route('/get_graph_data/<user_id>')
def get_graph_data(user_id):
    return generate_data.weekly_trips(user_id)
    
if __name__ == '__main__':
    app.run()



