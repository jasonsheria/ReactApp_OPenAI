
import React from 'react'
import './style.css'
import Header from '../../Header';
import { Link } from 'react-router-dom';
const Index = () => {
  return (
    <div>
      <Header />

      <section class="banner py-3 mt-4">
        <div class="container">
          <div class="banner-text">
            <h1>Manage</h1>
            <p><strong>We make it easy to get the most out of your virtual machine.</strong> Our tools make it simple to track how your Droplets are performing and help you to respond quickly if there is a problem</p>
            <button>Sign Up</button>
          </div>
        </div>
        <img class="banner-image" src="https://preview.ibb.co/bMi5Y6/banner_img.png" alt="monitoring" />
      </section>

      <div class="container py-3 mt-2">
        <div class="row">
          
          <div class="mb-30 col-md-6 col-lg-4">
          <Link to="/table">
            <div class="card">

              <img class="card-icon" src="https://image.ibb.co/cFV8mR/monitoring.png" alt="monitoring" />
              <h3 class="card-title">Monitoring</h3>
              <p class="card-text">Collect metrics on visibility, monitor Droplet performance and receive alerts when problems arise in your infrastructure–at no additional cost.</p>
              <a class="card-link" href="#">Learn more</a>
            </div>
            </Link>

          </div>
          <div class="mb-30 col-md-6 col-lg-4">
            <div class="card">
              <img class="card-icon" src="https://image.ibb.co/jfmg6R/cloud_firewalls.png" alt="monitoring" />
              <h3 class="card-title">Cloud Firewalls</h3>
              <p class="card-text">Perfect for both staging and production deployments, cloud firewalls let you easily secure your infrastructure and define what services are visible on your Droplets–at no additional cost.</p>
              <a class="card-link" href="#">Learn more</a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-4">
            <div class="card">
              <img class="card-icon" src="https://image.ibb.co/fcnzt6/team_management.png" alt="team management" />
              <h3 class="card-title">Team Management</h3>
              <p class="card-text">With Digital Teams you can invite and manage users, ensure security with two-factor authentication, and control your resource spend with centralized billing–at no additional cost.</p>
              <a class="card-link" href="#">Learn more</a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-4">
            <div class="card">
              <img class="card-icon" src="https://image.ibb.co/evyiLm/backups.png" alt="monitoring" />
              <h3 class="card-title">Backups</h3>
              <p class="card-text">Backups run automatically on your Droplets each week and are stored for four weeks–add 20% of monthly Droplet cost.</p>
              <a class="card-link" href="#">Learn more</a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-4">
            <div class="card">
              <img class="card-icon" src="https://image.ibb.co/g9bERR/snapshots.png" alt="snapshots" />
              <h3 class="card-title">Snapshots</h3>
              <p class="card-text">Scale out your system effortlessly. Just take a snapshot of an existing server, then spin up a new Droplet from the snapshot–add $0.05 per gigabyte per month.</p>
              <a class="card-link" href="#">Learn more</a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-4">
            <div class="card">
              <img class="card-icon" src="https://image.ibb.co/cFV8mR/monitoring.png" alt="monitoring" />
              <h3 class="card-title">Monitoring</h3>
              <p class="card-text">Collect metrics on visibility, monitor Droplet performance and receive alerts when problems arise in your infrastructure–at no additional cost.</p>
              <a class="card-link" href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};
export default Index