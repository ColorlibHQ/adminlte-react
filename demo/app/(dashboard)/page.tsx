'use client'

import { SmallBox, Card, ApexChart, SparklineChart, WorldMap, DirectChat, useSortable, AppContent } from 'adminlte-react'
import {
  revenueChartConfig,
  revenueChartSeries,
  sparklineData,
  chatContacts,
  chatMessages,
} from '@/lib/chart-data'

export default function DashboardPage() {
  useSortable()

  return (
    <AppContent
      title="Dashboard"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Dashboard' },
      ]}
    >
      <div className="row">
        <div className="col-lg-3 col-6">
          <SmallBox
            title="150"
            text="New Orders"
            theme="primary"
            icon={
              <svg className="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
              </svg>
            }
            url="#"
          />
        </div>
        <div className="col-lg-3 col-6">
          <SmallBox
            title={<><span>53</span><sup className="fs-5">%</sup></>}
            text="Bounce Rate"
            theme="success"
            icon={
              <svg className="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
              </svg>
            }
            url="#"
          />
        </div>
        <div className="col-lg-3 col-6">
          <SmallBox
            title="44"
            text="User Registrations"
            theme="warning"
            icon={
              <svg className="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
            }
            url="#"
          />
        </div>
        <div className="col-lg-3 col-6">
          <SmallBox
            title="65"
            text="Unique Visitors"
            theme="danger"
            icon={
              <svg className="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"></path>
                <path clipRule="evenodd" fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"></path>
              </svg>
            }
            url="#"
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-7 connectedSortable">
          <Card title="Sales Value" collapsible maximizable>
            <ApexChart
              id="revenue-chart"
              series={revenueChartSeries}
              config={revenueChartConfig}
            />
          </Card>

          <DirectChat
            badge={3}
            messages={chatMessages}
            contacts={chatContacts}
            collapsible
            removable
            className="mt-4"
          />
        </div>

        <div className="col-lg-5 connectedSortable">
          <div className="card text-white bg-primary bg-gradient border-primary mb-4">
            <div className="card-header border-0">
              <h3 className="card-title">Sales Value</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  data-lte-toggle="card-collapse"
                  aria-label="Collapse card"
                >
                  <i className="bi bi-plus-lg" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <WorldMap id="world-map" height={220} />
            </div>
            <div className="card-footer border-0">
              <div className="row">
                <div className="col-4 text-center">
                  <SparklineChart id="sparkline-1" data={sparklineData.visitors} />
                  <div className="text-white">Visitors</div>
                </div>
                <div className="col-4 text-center">
                  <SparklineChart id="sparkline-2" data={sparklineData.online} />
                  <div className="text-white">Online</div>
                </div>
                <div className="col-4 text-center">
                  <SparklineChart id="sparkline-3" data={sparklineData.sales} />
                  <div className="text-white">Sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContent>
  )
}
