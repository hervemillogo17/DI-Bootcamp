# Generated by Django 4.1.2 on 2022-10-26 11:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gifs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gif',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2022, 10, 26, 11, 58, 38, 349522)),
        ),
    ]