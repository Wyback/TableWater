export interface Piezometrie {
    code_bss: string,
    urn_bss: string,
    date_debut_mesure: Date,
    date_fin_mesure: Date,
    code_commune_insee: number,
    nom_commune: string,
    x: number,
    y: number,
    codes_bdlisa: number,
    urns_bdlisa: [],
    geometry: {
      type: string,
      crs: {
        type: string,
        properties: {
          name: string
        }
      },
      coordinates: number[]
    },
    bss_id: string,
    altitude_station: string,
    nb_mesures_piezo: number,
    code_departement: string,
    nom_departement: string,
    libelle_pe: number,
    profondeur_investigation: number,
    codes_masse_eau_edl: number,
    noms_masse_eau_edl: number,
    urns_masse_eau_edl: number[],
    date_maj: Date
  }