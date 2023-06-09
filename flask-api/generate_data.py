import pandas as pd
import os

def weekly_trips(user_id):
    user_id = int(user_id)
    trips_path = os.path.join(os.path.dirname(__file__), "resources/trip_summaries.csv")
    trips_df = pd.read_csv(trips_path)
    trips_df = trips_df.loc[trips_df['user_id'] == user_id]
    trips_df["start_time"] = pd.to_datetime(trips_df["start_time"])
    trips_df["end_time"] = pd.to_datetime(trips_df["end_time"])

    trips_df_agg = trips_df.groupby([trips_df['start_time'].dt.date]).agg(avg_daily_speed= ('average_speed' , 'mean'))
    results = [{"date":row[0].strftime("%m/%d/%Y"), "avg_daily_speed":row[1][0]} for row in trips_df_agg.iterrows()]
    return results
