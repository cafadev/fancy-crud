# Generated by Django 3.1.6 on 2021-11-25 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_artist_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='artist',
            name='image2',
            field=models.ImageField(null=True, upload_to='artists'),
        ),
    ]